interface DropdownItem<T1, T2> {
  value : T1;
  selected : T2;
};

const emails : DropdownItem<string,boolean>[] =[
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts : DropdownItem<number,boolean>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem<T1 extends string | number>(item : DropdownItem<T1,boolean>)  {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email ) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  
  selectTag?.appendChild(item);
});

numberOfProducts.forEach(function (product){
  const item = createDropdownItem<number>(product);
  const selectedTag = document.querySelector('pr0oduct-dropdown');

  selectedTag?.appendChild(item);
});
import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');
  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <form onSubmit={onFormSubmit} className="ui form">
      <div className="field">
        <label>Image Search</label>
        <input type="text" name="search" placeholder="" value={term}
          onChange={(event) => { setTerm(event.target.value) }} />
      </div>
    </form>
  );
};

export default SearchBar;

/*メモ
event.preventDefault()は、デフォルトで用意されている動作をやめる
今回の場合だと、searchbarに入力してenterを押すと画面がリロードされ
るのを中止する
*/
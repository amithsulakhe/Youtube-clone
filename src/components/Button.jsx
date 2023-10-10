import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchitem, addfounditems } from '../utils/particularitemSearchSlice';

const Button = ({ name }) => {
  const darkmoder = useSelector((store) => store.enabledarkmod.isMode);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  const searchParticularitem = (e) => {
    dispatch(addfounditems([]));
    setClicked(true);

    dispatch(addSearchitem(e.target.innerHTML));
  };

  return (
    <div className="">
      <button
        onClick={(e) => searchParticularitem(e)}
        className={`${
          darkmoder
            ? 'bg-gray-200 w-32 h-10 rounded-lg text-black hover:bg-gray-400'
            : 'text-white  w-32 h-10 rounded-lg hover:bg-[#272727]'
        } ${clicked ? 'focus:bg-gray-500' : ''}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;

import React, {useState, useEffect} from "react";
import icons from "../ultils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowModal, content, name }) => {
    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(100);

    useEffect(() => {
        const activeTrackEl = document.getElementById('track-active');
        activeTrackEl.style.left=`${percent1}%`;
    }, [percent1])

    useEffect(() => {
        const activeTrackEl = document.getElementById('track-active');
        activeTrackEl.style.right=`${100 - percent2}%`;
    }, [percent2])

  return (
    <div
      onClick={(e) => {
        setIsShowModal(false);
      }}
      className="fixed top-0 left-0 right-0 bottom-0 bg-overlay-70 z-20 flex items-center justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsShowModal(true);
        }}
        className="w-1/3 bg-white rounded-md"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-200">
          <span className='hover:cursor-pointer' onClick={(e) => {
            e.stopPropagation();
            setIsShowModal(false);
            }}>
            <GrLinkPrevious size={24} />
          </span>
        </div>
        {(name === 'category' || name === 'province') && <div className="p-4 flex flex-col">
            {content?.map(item => {
            return (
                <div key={item.code} className="py-2 flex gap-2 items-center border-b border-gray-200">
                    <input type="radio" name={name} id={item.code} value={item.code} />
                    <label htmlFor={item.code}>{item.value}</label>
                </div>
            )
        })}</div>}

        {(name === 'price' || name === 'area') && <div className='p-12'>
            <div className="flex flex-col items-center justify-center relative">
                <div className="slider-track h-[5px] absolute w-full top-0 bottom-0 bg-gray-300 rounded-full"></div>
                <div id="track-active" className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"></div>
               <input type="range" max='100' min='0' step='5' value={percent1} className="w-full appearance-none pointer-events-none absolute top-0 bottom-0" onChange={(e) => setPercent1(e.target.value)}/>
               <input type="range" max='100' min='0' step='5' value={percent2} className="w-full appearance-none pointer-events-none absolute top-0 bottom-0" onChange={(e) => setPercent2(e.target.value)}/>
             
            </div>
        </div>}
      </div>
    </div>
  );
};

export default Modal;

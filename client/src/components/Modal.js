import React, {useState, useEffect} from "react";
import icons from "../ultils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowModal, content, name }) => {
    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(100);

    useEffect(() => {
        const activeTrackEl = document.getElementById('track-active');
        if (percent2 <= percent1) {
            activeTrackEl.style.left=`${percent2}%`;
            activeTrackEl.style.right=`${100 - percent1}%`;
        } else {
            activeTrackEl.style.left=`${percent1}%`;
            activeTrackEl.style.right=`${100 - percent2}%`;
        }
        
    }, [percent1, percent2])

    const onHandleClickTrack = (e) => {
        e.stopPropagation();
        const stackEl = document.getElementById('stack');
        // Get toạ độ của thanh stack
        const stackRect = stackEl.getBoundingClientRect();
        let percent = Math.round((e.clientX - stackRect.left) * 100/stackRect.width);
        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent);
        } else {
            setPercent2(percent);
        }
    }

    const convert100to15 = (percent) => {
      // 10% => 1.5
      // 9% => 1.35 * 10 = 14/5 = 2 dư 4 => 3*5 = 15/10 = 1.5;
      // 11% => 1.65 * 10 = 17/5 = 3 dư 2 => 4*5 = 20/10 = 2;
      return (Math.ceil(Math.round((percent * 1.5)) / 5) * 5) / 10;
    }

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

        {(name === 'price' || name === 'area') && <div className='p-12 py-20'>
            <div className="flex flex-col items-center justify-center relative">
              <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-600">{`Từ ${percent1 <= percent2 ? convert100to15(percent1) : convert100to15(percent2)} - ${percent2 >= percent1 ? convert100to15(percent2) : convert100to15(percent1)} triệu`}</div>
                <div onClick={onHandleClickTrack} id="stack" className="slider-track h-[5px] absolute w-full top-0 bottom-0 bg-gray-300 rounded-full"></div>
                <div onClick={onHandleClickTrack} id="track-active" className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"></div>
               <input type="range" max='100' min='0' step='1' value={percent1} className="w-full appearance-none pointer-events-none absolute top-0 bottom-0" onChange={(e) => setPercent1(+e.target.value)}/>
               <input type="range" max='100' min='0' step='1' value={percent2} className="w-full appearance-none pointer-events-none absolute top-0 bottom-0" onChange={(e) => setPercent2(+e.target.value)}/>
               <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center">
                <span>0</span>
                <span className="mr-[-12px]">15 triệu +</span>
              </div>
            </div>
        </div>}
      </div>
    </div>
  );
};

export default Modal;

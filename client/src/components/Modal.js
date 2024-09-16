import React, {useState, useEffect} from "react";
import icons from "../ultils/icons";

const { GrLinkPrevious } = icons;

const Modal = ({ setIsShowModal, content, name }) => {
    const [percent1, setPercent1] = useState(0);
    const [percent2, setPercent2] = useState(100);
    const [activeEl, setActiveEl] = useState('');

    useEffect(() => {
        const activeTrackEl = document.getElementById('track-active');
       if (activeTrackEl) {
        if (percent2 <= percent1) {
          activeTrackEl.style.left=`${percent2}%`;
          activeTrackEl.style.right=`${100 - percent1}%`;
      } else {
          activeTrackEl.style.left=`${percent1}%`;
          activeTrackEl.style.right=`${100 - percent2}%`;
      }
       }
    }, [percent1, percent2])

    const handleClickTrack = (e, value) => {
        e.stopPropagation();
        const stackEl = document.getElementById('stack');
        // Get toạ độ của thanh stack
        const stackRect = stackEl.getBoundingClientRect();
        let percent = value ? value : Math.round((e.clientX - stackRect.left) * 100/stackRect.width);
        if (Math.abs(percent - percent1) <= Math.abs(percent - percent2)) {
            setPercent1(percent);
        } else {
            setPercent2(percent);
        }
    }

    const convert100toTarget = (percent) => {
      // 10% => 1.5
      // 9% => 1.35 * 10 = 14/5 = 2 dư 4 => 3*5 = 15/10 = 1.5;
      // 11% => 1.65 * 10 = 17/5 = 3 dư 2 => 4*5 = 20/10 = 2;
      //  ? 1.5 : name === 'area' ? 9 : 1;
      return name === 'price' 
      ? (Math.ceil(Math.round((percent * 1.5)) / 5) * 5) / 10 
      : name === 'area' 
      ? (Math.ceil(Math.round((percent * 0.9)) / 5) * 5)
      : 0;
    }

    const convert15to100 = percent => {
      let target = name === 'price' ? 15 : name === 'area' ? 90 : 1;
      return Math.floor((percent/target)*100);
    }

    const getNumbers = (string) => string.split(' ').map(item => +item).filter(item => !item === false)
    const getNumbersArea = (string) => string.split(' ').map(item => +item.match(/\d+/)).filter(item => item !== 0)

    const handleActive = (code, value) => {
      setActiveEl(code);
      let arrMaxMin = name === 'price' ? getNumbers(value) : getNumbersArea(value);
      if (arrMaxMin.length === 1) {
        if (arrMaxMin[0] === 1) {
          setPercent1(0);
          setPercent2(convert15to100(1));
        }

        if (arrMaxMin[0] === 20) {
          setPercent1(0);
          setPercent2(convert15to100(20));
        }

        if (arrMaxMin[0] === 15 || arrMaxMin[0] === 90) {
          setPercent1(100);
          setPercent2(100);
        }
      }

      if (arrMaxMin.length === 2) {
        setPercent1(convert15to100(arrMaxMin[0]));
        setPercent2(convert15to100(arrMaxMin[1]));
      }
    }

    const handleSubmit = () => {
      console.log('start: ', convert100toTarget(percent1));
      console.log('end: ', convert100toTarget(percent2));
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
        className="w-2/5 bg-white rounded-md"
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
              <div className="z-30 absolute top-[-48px] font-bold text-xl text-orange-600">{`Từ ${percent1 <= percent2 ? convert100toTarget(percent1) : convert100toTarget(percent2)} - ${percent2 >= percent1 ? convert100toTarget(percent2) : convert100toTarget(percent1)} ${name === 'price' ? 'triệu' : 'm2'}`}</div>
                <div onClick={handleClickTrack} id="stack" className="slider-track h-[5px] absolute w-full top-0 bottom-0 bg-gray-300 rounded-full"></div>
                <div onClick={handleClickTrack} id="track-active" className="slider-track-active h-[5px] absolute top-0 bottom-0 bg-orange-600 rounded-full"></div>
               <input type="range" max='100' min='0' step='1' value={percent1} className="w-full appearance-none pointer-events-none absolute top-0 bottom-0" onChange={
                (e) => { setPercent1(+e.target.value)
                activeEl && setActiveEl('')
               }}/>
               <input type="range" max='100' min='0' step='1' value={percent2} className="w-full appearance-none pointer-events-none absolute top-0 bottom-0" onChange={
                (e) => {
                  setPercent2(+e.target.value);
                  activeEl && setActiveEl('');
                }}/>
               <div className="absolute z-30 top-6 left-0 right-0 flex justify-between items-center">
                <span className="cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  handleClickTrack(e, 0);
                }}>
                  0
                </span>
                <span className="mr-[-12px] cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  handleClickTrack(e, 100);
                }}>{name === 'price' ? '15 triệu +' : name === 'area' ? 'Trên 90 m2' : '' }</span>
              </div>
            </div>

            <div className="mt-24">
              <h4 className="font-medium mb-4">Chọn nhanh:</h4>
              <div className="flex gap-2 items-center flex-wrap w-full">{content?.map(item => {
                return (
                  <button key={item.code} onClick={() => handleActive(item.code, item.value)} className={`px-4 py-1 bg-gray-200 rounded-md cursor-pointer ${item.code === activeEl ? 'bg-blue-500 text-white' : ''}`}>
                    {item.value}
                  </button>
                )
              })}</div>
             
            </div>
        </div>}
        { (name === 'price' || name === 'area') && <button 
          type="button" 
          className="w-full bg-[#FFA500] py-2 font-medium rounded-bl-md rounded-br-md"
          onClick={handleSubmit}
        >ÁP DỤNG</button> }
      </div>
    </div>
  );
};

export default Modal;

import { ReactComponent as SwapIcon } from '../../assets/swap-horizontal.svg';

const ICON_SIZE = 20;
const SwapButton = ({ onSwap }: { onSwap: () => void }) => {
  return (
    <div
      className="bg-white md:self-end mb-[10px] border 
      border-stone-300 p-2 rounded-lg rotate-90 md:rotate-0 transition md:-mx-2 z-10 cursor-pointer"
      onClick={onSwap}
    >
      <SwapIcon width={ICON_SIZE} height={ICON_SIZE} />
    </div>
  );
};

export default SwapButton;

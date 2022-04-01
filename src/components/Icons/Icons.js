import { Icon } from 'react-icons-kit'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHandHoldingDollar,
   faCoins 
} from '@fortawesome/free-solid-svg-icons'






import {menu} from 'react-icons-kit/icomoon/menu'
import {ic_account_circle} from 'react-icons-kit/md/ic_account_circle'
import {plusCircle} from 'react-icons-kit/fa/plusCircle'
import {stickyNoteO} from 'react-icons-kit/fa/stickyNoteO'
import {minusCircle} from 'react-icons-kit/fa/minusCircle'
import {plus} from 'react-icons-kit/metrize/plus'
import {truck} from 'react-icons-kit/fa/truck'
import {ioxhost} from 'react-icons-kit/fa/ioxhost'
import {handGrabO} from 'react-icons-kit/fa/handGrabO'
import {refresh} from 'react-icons-kit/fa/refresh'
import {trashO} from 'react-icons-kit/fa/trashO'
import {pencilSquareO} from 'react-icons-kit/fa/pencilSquareO'
import {timesCircle} from 'react-icons-kit/fa/timesCircle'

export const Menu = () => <Icon size={32} icon={menu} />
export const Account = () => <Icon size={32} icon={ic_account_circle} />
export const PlusCircle = () => <Icon size={32} icon={plusCircle} />
export const MinusCircle = () => <Icon size={32} icon={minusCircle} />
export const StickyNote = () => <Icon size={20} icon={stickyNoteO} />
export const Plus = () => <Icon size={20} icon={plus} />
export const Truck = () => <Icon size={20} icon={truck} />
export const HoldOrder = () => <Icon size={20} icon={refresh} />

export const Trash = () => <Icon size={20} icon={trashO} />
export const Edit = () => <Icon size={20} icon={pencilSquareO} />
export const HandGrab = () => <Icon size={25} icon={handGrabO} />
export const Cancel = () => <Icon size={25} icon={timesCircle} />



export const Pay =()=> <FontAwesomeIcon icon={faHandHoldingDollar} />
export const Discount =()=> <FontAwesomeIcon icon={faCoins} />
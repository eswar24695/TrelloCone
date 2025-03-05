import { useDrag } from 'react-dnd';
import { useAppState } from '../state/AppStateContext';
import { setDraggedItem } from '../state/actions';
import { DragItem } from '../DragItem';
export const useItemDrag=(item:DragItem)=>{
    const {dispatch}=useAppState()
    const [,drag]=useDrag({
        type:item.type,
        item:()=>{
            dispatch(setDraggedItem(item))
            return item
        },
        end:()=>dispatch(setDraggedItem(null))
    })
    return {drag}
}
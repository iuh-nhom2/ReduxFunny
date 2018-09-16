import {connect} from 'react-redux';
import CouterComponet from '../components/coutercomponent';
import {increaseAction} from '../actions';
import {decreaseAction} from '../actions';

const mapStateToProps = (state) =>{
    alert(`state after changed : ${JSON.stringify(state.counterReducers)}`);
    return{
            times: state.counterReducers ? state.counterReducers :0
            
    }
};

const mapDispatchToProps = (dispatch) =>{
    return{
        onDecrement: (step)=>{
            dispatch(decreaseAction(step));
        },
        onIncrement: (step)=>{
            dispatch(increaseAction(step));
        }
    };
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CouterComponet);
export default CounterContainer ;


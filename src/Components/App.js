import Main from './Main'
import {connect} from 'react-redux'
import {removePost} from '../redux/action'
import {bindActionCreators} from 'redux'

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    
}

const MainApp = connect(mapStateToProps)(Main)

export default MainApp
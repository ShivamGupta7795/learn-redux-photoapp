import Main from './Main'
import {connect} from 'react-redux'
import * as actions from '../redux/action'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router'

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
}

const MainApp = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default MainApp
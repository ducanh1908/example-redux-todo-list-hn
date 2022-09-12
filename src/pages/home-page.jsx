import casual from 'casual-browserify';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import HobbyList from '../components/home/hobby-list';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {
    
};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list )
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch()
const handleAddHobby = () => {
    const newHobby = {
        id : casual.uuid,
        title: casual.title
    }
    const action = addNewHobby(newHobby)
    dispatch(action)
}
const handleClickActive =(hobby) => {
    const action = setActiveHobby(hobby)
    dispatch(action)
}

    return (
        <div className='home-page'>
            <h1>redux hook home page</h1>
            <button onClick={handleAddHobby}> Ramdom</button>
            <HobbyList  hobbyList={hobbyList}
            activeId = {activeId}
            onHobbyClick= {handleClickActive}/>
        </div>
    );
}

export default HomePage;
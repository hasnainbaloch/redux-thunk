import React from 'react';
import { connect } from 'react-redux';
// import * as actionsType from '../../store/actions/actions';
import * as actionCreater from '../../store/actions/actions';
import Controller from '../../components/CounterController/CounterController';
import Output from '../../components/CounterOutput/CounterOutput';
import AddPerson from '../../components/AddPerson/AddPerson';
import Person from '../../components/Person/Person';
import GitUserName from '../../components/gitUserName/gitUserName';
import GitUserDetails from '../../components/gitUserDetails/gitUserDetails';


class Counter extends React.Component {


    render(){
        return(

           <div>
                <Output output={this.props.ctr}/>
                <Controller 
                    addOne={this.props.onAdd}
                    subOne={this.props.onSubtract}
                    addTen={this.props.onAddTen}
                    subFifteen={this.props.onSubFifteen}
                    result={() => this.props.onResult(this.props.ctr)}
                />
                {this.props.rsl.map(res => (
                        <p 
                            key={res.id} 
                            onClick={() => this.props.onRemove(res.id)}
                        >
                            {res.value}
                        </p>
                ))}
                <hr/>
                <br/>
                <AddPerson addPerson={this.props.onAddPerson}/>
                {
                    this.props.pers.map(person => {
                        return(
                            <>
                                <Person key={person.id} name={person.name} age={person.age}  removePerson={() => this.props.onRemovePerson(person.id)}/>
                            </>
                        )
                    })
                }
                <hr/>
                <br/>
                <GitUserName getGitUser={this.props.onGetGitUser}/>
                {
                    this.props.gitUser.map(person => {
                        return(
                            <>
                                <GitUserDetails 
                                    key={person.id} 
                                    name={person.name} 
                                    photo={person.photo}  
                                    repo={person.repo}  
                                    following={person.following}  
                                    follower={person.follower}  
                                    removePerson={() => this.props.onRemovePerson(person.id)}
                                />
                            </>
                        )
                    })
                }

           </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        ctr: state.ctr.counter,
        rsl: state.res.result,
        pers: state.pers.person,
        gitUser: state.gUser.users

    }
}

const mapDispatchToState = (dispatch) => {

    return{
        onAdd: () => dispatch(actionCreater.increment()),
        onSubtract: () => dispatch(actionCreater.decrement()),
        onAddTen: () => dispatch(actionCreater.addTen()),
        onSubFifteen: () => dispatch(actionCreater.subFifteen()),
        onResult: (result) => dispatch(actionCreater.result(result)),
        onRemove: (id) => dispatch(actionCreater.removeResult(id)),
        onAddPerson: (name, age, id) => dispatch(actionCreater.addPerson(name,age,id)),
        onRemovePerson: (id) => dispatch(actionCreater.removePerson(id)),
        onGetGitUser: (name) => dispatch(actionCreater.getGitUser(name))
    }

}


export default connect(mapStateToProps, mapDispatchToState)(Counter);
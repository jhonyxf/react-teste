import React, { Component} from 'react';

class ContadorCaracteres extends Component{

    static defaultProps = {
        title: ''
    }

    state = {
        totalCaracteres : 0
    }

    handleChangeEvent(event){
        var element = event.target, 
            value = element.value;

        this.setState({totalCaracteres: value.length})
    }

    render(){
        return(
            <div>
                {this.props.title}
                <textarea onChange={this.handleChangeEvent.bind(this)} />
                <div>
                    <b>Total: </b> {this.state.totalCaracteres}
                </div>
            </div>
        );
    }
}

export default ContadorCaracteres;
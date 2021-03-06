import React from 'react';
import { Render } from 'react-dom';

export class MyListItem extends React.Component{
    state = {
        totalClicks : 0
    }

    click = ()=>{
        var totalClicks = ++this.state.totalClicks;
        this.setState({totalClicks});
        this.props.onClick && this.props.onClick();
    }

    render(){
        var props = this.props,
            state = this.state,
            style = {"color": props.color};
        return(
            <li onClick={this.click} style={style}>{props.text} - {state.totalClicks}</li>
        )
    }
}

export class MyList extends React.Component{
    state = {
        totalClicks: 0
    }

    childClick = ()=>{
        var totalClicks = ++this.state.totalClicks;
        this.setState({totalClicks});
    }

    render(){
        var props = this.props,
              state = this.state;

        return (
            <div>
                <h3>Total de Itens: {props.children.length}</h3>
                <h3>Total de Cliques: {state.totalClicks}</h3>
                <ul>
                    {
                        this.props.children.map((child, index)=>{
                            return <MyListItem onClick={this.childClick.bind(this)} color="red" text={child.props.children} key={index}  />
                        })
                    }
                </ul>
            </div>
        );
    }
}
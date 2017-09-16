/**
 * Created by caiiiac on 2017/9/15.
 */


import React, { Component } from 'react';
import { on, remove } from './event';
import { getValue } from './counter';

export const connector = (name, __Component)=> {
    class SimpleEventConnector extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: getValue(),
            };

            this.handler = ( (data) => {
                this.setState({
                    data: data
                });
            }).bind(this);
        }

        componentDidMount() {
            on(name, this.handler);
        }

        componentWillUnmount() {
            remove(name, this.handler);
        }

        render() {
            const {data} = this.state;

            return <__Component data={data} />
        }
    }

    return SimpleEventConnector;
}
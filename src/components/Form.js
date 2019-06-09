import React from 'react';
import Slider from './Slider';

export default class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getLoan}>
                <Slider color="#0074D9" />
                <input type="number" name="months" placeholder="No. of months min 6 max 24" />
                <button>Get details</button>
            </form>
        );
    }
}
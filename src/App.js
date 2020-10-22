import React from 'react';
import axios from 'axios';
import './styles/advice.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            advice: '',
        };
    }

    async componentDidMount() {
        try {
            const { data } = await axios.get('https://api.adviceslip.com/advice');
            const { slip } = data;
            const { advice } = slip;
            this.setState({ advice });
        } catch (error) {
            console.log(error);
        }
    }

    adviceGenerator = async () => {
        try {
            const { data } = await axios.get('https://api.adviceslip.com/advice');
            const { slip } = data;
            const { advice } = slip;
            this.setState({ advice });
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <div className='big'>
                <div className='container-fluid box1 text-center'>
                    <h1>Advice Generator</h1>
                </div>

                <div className='container text-center box2'>
                    <h4 className='text-center'>{this.state.advice}</h4>
                </div>

                <div className='img-align'>
                    <div className='align'>
                        <img src={window.location.origin + '/img/Capture.png'} alt='baba g' className='pic' />
                    </div>
                    <div className='move'>
                        <button className='btn btn-danger ' onClick={this.adviceGenerator}>
                            {' '}
                            Click me to get advice
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

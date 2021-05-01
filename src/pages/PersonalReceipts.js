import React from 'react'
import Button from '@material-ui/core/Button';
import {updateUser} from "../api";

import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import {useUsers, deleteUser, createSurvey} from "../api.js";

import Adduser from "../components/Adduser";

import '../styles/Users.css';
import {UserTable} from "../components/UserTable";
import {getUsername, getUsertype} from "../components/CurrentUser";
import Image from "react-bootstrap/Image";

import dog1 from '../assets/dog1.jpg'
import dog2 from '../assets/dog2.jpg'
import dog3 from '../assets/dog3.jpg'
import dog4 from '../assets/dog4.jpg'
import dog5 from '../assets/dog5.jpg'
import dog6 from '../assets/dog6.jpg'
import dog7 from '../assets/dog7.jpg'
import dog8 from '../assets/dog8.jpg'
import dog9 from '../assets/dog9.jpg'




function onSubmit(v1,v2,v3,v4,v5,v6,v7,v8,v9) {
    createSurvey({
        username:getUsername(),
        usertype:getUsertype(),
        photo1:v1,
        photo2:v2,
        photo3:v3,
        photo4:v4,
        photo5:v5,
        photo6:v6,
        photo7:v7,
        photo8:v8,
        photo9:v9
    }

        )
}



const labels = {
    0.5: 'Dislike',
    1: 'Dislike+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const useStyles = makeStyles({
    root: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    },
});

export default function HoverRating() {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);
    const [value1, setValue1] = React.useState(0);
    const [hover1, setHover1] = React.useState(-1);
    const [value2, setValue2] = React.useState(0);
    const [hover2, setHover2] = React.useState(-1);
    const [value3, setValue3] = React.useState(0);
    const [hover3, setHover3] = React.useState(-1);
    const [value4, setValue4] = React.useState(0);
    const [hover4, setHover4] = React.useState(-1);
    const [value5, setValue5] = React.useState(0);
    const [hover5, setHover5] = React.useState(-1);
    const [value6, setValue6] = React.useState(0);
    const [hover6, setHover6] = React.useState(-1);
    const [value7, setValue7] = React.useState(0);
    const [hover7, setHover7] = React.useState(-1);
    const [value8, setValue8] = React.useState(0);
    const [hover8, setHover8] = React.useState(-1);
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <div className="pics6">
                <h1>Survey</h1>
                <div id="status3_pics">
                    <ul className="pics6_status3">
                        <li>
                            <div><b>DOG 1</b></div>
                            <Image id="1" className="status3-pic" height="400" width="400"
                                // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>

                                   src = {dog1}/>
                               <div>How much you like the dog?</div>
                            <Rating
                                name="hover-feedback"
                                value={value}
                                precision={0.5}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                onChangeActive={(event, newHover) => {
                                    setHover(newHover);
                                }}
                            />
                                {value !== null && <Box id= 'box1' ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
                        </li>


                        <li>
                            <div><b>DOG 2</b></div>
                            <img id="2" className="status3-pic" height="400" width="400"
                                 //src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1541213992,76400213&fm=26&gp=0.jpg"/>
                                 src = {dog2}/>
                            <div>How much you like the dog?</div>


                                <Rating
                                    name="hover-feedback1"
                                    value={value1}
                                    precision={0.5}
                                    onChange={(event1, newValue1) => {
                                        setValue1(newValue1);
                                    }}
                                    onChangeActive={(event1, newHover1) => {
                                        setHover1(newHover1);
                                    }}
                                />
                                {value1 !== null && <Box ml={2}>{labels[hover1 !== -1 ? hover1 : value1]}</Box>}
                    </li>
                        <li>
                            <div><b>DOG 3</b></div>
                            <img id="3" className="status3-pic" height="400" width="400"
                                 //src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1867263544,2857916448&fm=26&gp=0.jpg"/>
                                 src = {dog3}/>
                            <div>How much you like the dog?</div>


                            <Rating
                                name="hover-feedback2"
                                value={value2}
                                precision={0.5}
                                onChange={(event2, newValue2) => {
                                    setValue2(newValue2);
                                }}
                                onChangeActive={(event2, newHover2) => {
                                    setHover2(newHover2);
                                }}
                            />
                            {value2 !== null && <Box ml={2}>{labels[hover2 !== -1 ? hover2 : value2]}</Box>}
                        </li>

                    </ul>
                </div>



                <div id="status3_pics">
                    <ul className="pics6_status3">
                        <li>
                            <div><b>DOG 4</b></div>
                            <img id="4" className="status3-pic" height="400" width="400"
                                 //src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2219225502,1868692565&fm=26&gp=0.jpg"/>
                                 src = {dog4}/>
                            <div>How much you like the dog?</div>
                            <Rating
                                name="hover-feedback3"
                                value={value3}
                                precision={0.5}
                                onChange={(event3, newValue3) => {
                                    setValue3(newValue3);
                                }}
                                onChangeActive={(event3, newHover3) => {
                                    setHover3(newHover3);
                                }}
                            />
                            {value3 !== null && <Box id= 'box1' ml={2}>{labels[hover3 !== -1 ? hover3 : value3]}</Box>}
                        </li>

                        <li>
                            <div><b>DOG 5</b></div>
                            <img id="5" className="status3-pic" height="400" width="400"
                                 //src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=979862297,3441058921&fm=26&gp=0.jpg"/>
                            src = {dog5}/>
                            <div>How much you like the dog?</div>


                            <Rating
                                name="hover-feedback4"
                                value={value4}
                                precision={0.5}
                                onChange={(event4, newValue4) => {
                                    setValue4(newValue4);
                                }}
                                onChangeActive={(event4, newHover4) => {
                                    setHover4(newHover4);
                                }}
                            />
                            {value4 !== null && <Box ml={2}>{labels[hover4 !== -1 ? hover4 : value4]}</Box>}
                        </li>


                        <li>
                            <div><b>DOG 6</b></div>
                            <img id="6" className="status3-pic" height="400" width="400"
                                 //src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477240067,1549523397&fm=26&gp=0.jpg"/>
                                 src = {dog6}/>
                            <div>How much you like the dog?</div>


                            <Rating
                                name="hover-feedback5"
                                value={value5}
                                precision={0.5}
                                onChange={(event5, newValue5) => {
                                    setValue5(newValue5);
                                }}
                                onChangeActive={(event5, newHover5) => {
                                    setHover5(newHover5);
                                }}
                            />
                            {value5 !== null && <Box ml={2}>{labels[hover5 !== -1 ? hover5 : value5]}</Box>}
                        </li>
                    </ul>
                </div>



                        <div id="status3_pics">
                            <ul className="pics6_status3">
                                <li>
                                    <div><b>DOG 7</b></div>
                                    <img id="7" className="status3-pic" height="400" width="400"
                                        // src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=916075890,1662056472&fm=11&gp=0.jpg"/>
                                         src = {dog7}/>
                                    <div>How much you like the dog?</div>



                                    <Rating
                                        name="hover-feedback6"
                                        value={value6}
                                        precision={0.5}
                                        onChange={(event6, newValue6) => {
                                            setValue6(newValue6);
                                        }}
                                        onChangeActive={(event3, newHover6) => {
                                            setHover6(newHover6);
                                        }}
                                    />
                                    {value6 !== null && <Box ml={2}>{labels[hover6 !== -1 ? hover6 : value6]}</Box>}
                                </li>



                                <li>
                                    <div><b>DOG 8</b></div>
                                    <img id="8" className="status3-pic" height="400" width="400"
                                        // src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2870177897,1063334582&fm=26&gp=0.jpg"/>
                                         src = {dog8}/>
                                    <div>How much you like the dog?</div>


                                    <Rating
                                        name="hover-feedback7"
                                        value={value7}
                                        precision={0.5}
                                        onChange={(event7, newValue7) => {
                                            setValue7(newValue7);
                                        }}
                                        onChangeActive={(event7, newHover7) => {
                                            setHover7(newHover7);
                                        }}
                                    />
                                    {value7 !== null && <Box ml={2}>{labels[hover7 !== -1 ? hover7 : value7]}</Box>}
                                </li>


                                <li>
                                    <div><b>DOG 9</b></div>
                                    <img id="9" className="status3-pic" height="400" width="400"
                                         //src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1911301903,2982696630&fm=26&gp=0.jpg"/>
                                         src = {dog9}/>
                                    <div>How much you like the dog?</div>


                                    <Rating
                                        name="hover-feedback8"
                                        value={value8}
                                        precision={0.5}
                                        onChange={(event8, newValue8) => {
                                            setValue8(newValue8);
                                        }}
                                        onChangeActive={(event8, newHover8) => {
                                            setHover8(newHover8);
                                        }}
                                    />
                                    {value8 !== null && <Box ml={2}>{labels[hover8 !== -1 ? hover8 : value8]}</Box>}
                                </li>
                            </ul>


                        </div>
                <div>

                <Button variant="contained" color = "primary" onClick={() => { onSubmit(value,value1,value2,value3,value4,value5,value6,value7,value8) }}>
                    Submit
                </Button>
            </div>
        </div>
        </div>
    );
}


{/*

export default

    class StarRating extends React.Component {


        static defaultProps = {
            canClick: true,
            rateNum: 5,
            handleSelectRate: null,
            rateValue: 0
        }


        constructor(props) {
            super(props)
            this.state = {
                rateValue: 0,
                rateArray: new Array(Number(props.rateNum)).fill(''),
                rateArray1: new Array(Number(props.rateNum)).fill(''),
                rateArray2: new Array(Number(props.rateNum)).fill(''),
                rate: new Array(Number(props.rateNum)).fill('')
            }
        }

        handleSelectRate(value) {
            if (!this.props.canClick) {
                return
            }
            this.setState({
                rateValue: value
            })
            this.props.handleSelectRate && this.props.handleSelectRate(value)
        }

        render() {


            const {rateArray, rateArray1, rateArray2, rateValue, rate} = this.state
            const {rateNum} = this.props


            return (


                <div className="pics6">
                    <h1>Survey</h1>
                    <div id="status3_pics">
                        <ul className="pics6_status3">
                            <li>
                                <Image id="1" className="status3-pic" height="300" width="400" alt=""
                                       src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1377867411,289768012&fm=26&gp=0.jpg"/>
                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index = 0) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : 0} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index = 0) => <span
                                                onClick={() => this.rateArray.push(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                </div>


                            </li>
                            <li>
                                <img id="2" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1541213992,76400213&fm=26&gp=0.jpg"/>

                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.rateArray.push(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <img id="3" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1867263544,2857916448&fm=26&gp=0.jpg"/>
                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="status3_pics">
                        <ul className="pics6_status3">
                            <li>
                                <img id="4" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2219225502,1868692565&fm=26&gp=0.jpg"/>
                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>

                            </li>
                            <li>
                                <img id="5" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=979862297,3441058921&fm=26&gp=0.jpg"/>

                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                            <li>
                                <img id="6" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3477240067,1549523397&fm=26&gp=0.jpg"/>
                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="status3_pics">
                        <ul className="pics6_status3">
                            <li>
                                <img id="7" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=916075890,1662056472&fm=11&gp=0.jpg"/>
                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>

                            </li>
                            <li>
                                <img id="8" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2870177897,1063334582&fm=26&gp=0.jpg"/>

                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                            <li>
                                <img id="9" className="status3-pic" height="300" width="400" alt=""
                                     src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1911301903,2982696630&fm=26&gp=0.jpg"/>
                                <div>How much you like the dog?</div>
                                <div className="rate">
                                    <div className="rate__bg">
                                        {rateArray.map((item, index) => <span
                                            onClick={() => this.handleSelectRate(index + 1)}
                                            key={`rate_${index}`}>☆</span>)}
                                        <div className="bg__realrate"
                                             style={{width: `calc(${rateValue ? rateValue : this.props.rateValue} / ${rateNum} * 100%)`}}>
                                            {rateArray.map((item, index) => <span
                                                onClick={() => this.handleSelectRate(index + 1)}
                                                key={`rate_selected_${index}`}>★</span>)}


                                        </div>

                                    </div>
                                    {rate.push(this.props.rateValue)}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <Button>
                            className={"btn-warning"} onClick={onSubmit(this.state)}>Submit
                        </Button>
                    </div>

                </div>


            )
        }


    }
*/}



import React, {useState, useCallback} from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

export default function Display(props) {

    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const ExpansionPanel = withStyles({
        root: {
          width: '50%',
          border: '1px solid rgba(0, 0, 0, .125)',
          boxShadow: 'none',
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
          '&$expanded': {
            margin: '0',
          },
        },
        expanded: {
            margin:0
        },
        })(MuiExpansionPanel);
      
      const ExpansionPanelSummary = withStyles({
        root: {
          backgroundColor: 'rgba(0, 0, 0, .03)',
        //   borderBottom: '1px solid rgba(0, 0, 0, .125)',
          marginBottom: -1,
          minHeight: 56,
          '&$expanded': {
            minHeight: 56,
          },
        },
        content: {
          '&$expanded': {
            margin: '20px 0 20px 0',
            
          },
        },
        expanded: {},
      })(MuiExpansionPanelSummary);
      
      const ExpansionPanelDetails = withStyles((theme) => ({
        root: {
          padding: theme.spacing(2),
        },
    }))(MuiExpansionPanelDetails);

    const completed = (id) => {
        
        let url = "http://localhost:3001/orders/" + id;

        axios.put(url, {status:true} ).then(res=>{
            props.getorder();
            console.log("completedddd")
        }
        ).catch((err)=>{alert(err); console.log(err)});

    }
      
    return (
        <div>

            <ExpansionPanel  onChange={handleChange()}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                    <ul className= 'emul' style={{display:'flex', fontWeight:'600'}}>
                        <li> ID </li> <li> Customer</li> <li> Price</li>
                    </ul>
                </ExpansionPanelSummary>
            </ExpansionPanel>

            
            {(props.map).map((val,k)=>(
                
                <ExpansionPanel square expanded={expanded === k} onChange={handleChange(k)}>
                    <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                            
                        <ul key ={k} className= 'emul' style={{display:'flex'}}>
                            <li>{val.orderid}</li> <li>{val.username}</li> <li>{val.price}</li>
                        </ul>

                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>

                        <Typography>
                            {val.orderitems.map((o,v)=>(
                              <p key={v}>{o.fooditem}</p>
                            ))
                            }
                        </Typography>

                        {props.but ? <button onClick={(event)=>completed(val.orderid)}style={{position:'absolute', right:'10%'}}> Finish </button> : ''}

                    </ExpansionPanelDetails>
                </ExpansionPanel>
    
            ))}        
        </div>
    )
}

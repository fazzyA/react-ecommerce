import React,{useState} from 'react'
import CategoryBox from '../components/CategoryBox'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
function Home() {
    const [category, setcategory] = useState('jewellery')
    return (
        <div>
            <Grid container direction='row' spacing={0}>
                <Grid item xs={6}>
                    <Paper className=''><CategoryBox cat={category} /></Paper>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Paper className=''><CategoryBox cat='women clothing' /></Paper>
                </Grid>
            </Grid>
            <Grid container direction='row' spacing={0}>
                <Grid item xs={6}>
                    <Paper className=''><CategoryBox cat='electronis' /></Paper>
                </Grid>
                <Grid item xs={6} sm={6}>
                    <Paper className=''><CategoryBox cat='man clothing' /></Paper>
                </Grid>
            </Grid>
                
        </div>
    )
}

export default Home

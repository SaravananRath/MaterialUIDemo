import React,{Fragment} from 'react'
import { Grid,Paper,Typography,List,ListItem,ListItemText } from '@material-ui/core'
// import LeftPane from './LeftPane'
// import RightPane from './RightPane'
const styles = {
    Paper:{
        padding:20,
        marginTop:10,
        marginBottom:10,
        marginLeft:10,
        marginRight:10,
        height:500,
        overflowY:'auto'
    }
}
export default ({
                    exercises,
                    category,
                    onSelectExercise,
                    exercise:
                        {
                            id,
                            title='Welcome!',
                            description='Please select an exercise to continue!'
                        }
}) =>
<Grid container >
    <Grid item xs={3}>
        <Paper style={styles.Paper}>
            {exercises.map(([m,e],index)=>
                !category || category === m
                    ? <Fragment key={index}>
                        <Typography  variant={'headline'} style={{textTransform:'capitalize'}}>
                        {m}
                        </Typography>
                        <List component='ul'>
                            {e.map(({ id,title },index)=>
                                <ListItem button key={index} onClick={()=>onSelectExercise(id)}>
                                <ListItemText
                                    primary={title}
                                />
                                </ListItem>)}
                                </List>
                        </Fragment>
                    :null
             )}
        </Paper>
    </Grid>
    <Grid item xs={9}>
        <Paper style={styles.Paper}>
            <Typography variant={'display1'}>{title}</Typography>
            <Typography variant={'subheading'} style={{marginTop:20}}>{description}</Typography>
        </Paper>
    </Grid>
</Grid>
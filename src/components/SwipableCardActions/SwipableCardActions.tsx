import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import InfoIcon from '@material-ui/icons/Info';
import { red, green } from '@material-ui/core/colors';
import {SwipableCardActionsProps} from './types';

const useStyles = makeStyles((theme) => ({
	accept: {
		color: green[500],
	},
	actionContainer: {
		flexGrow: 1,
		textAlign: 'center'
	},
	reject: {
		color: red[500],
	},
}));

const SwipableCardActions = (props: SwipableCardActionsProps) => {
	const classes = useStyles();

	return (
		<CardActions>
			<div className={classes.actionContainer}>
				<IconButton>
					<ClearIcon className={classes.reject} fontSize='large' />
				</IconButton>
			</div>
			<div className={classes.actionContainer}>
				<IconButton>
					<InfoIcon fontSize='large' onClick={props.viewInfo} />
				</IconButton>
			</div>
			<div className={classes.actionContainer}>
				<IconButton>
					<CheckIcon className={classes.accept} fontSize='large' />
				</IconButton>
			</div>
		</CardActions>
	);
}

export {SwipableCardActions};
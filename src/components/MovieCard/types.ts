import {MovieInfoProps} from '../InfoCard/types';

export interface MovieCardInfoProps extends MovieInfoProps {
	fullView: boolean,
	viewInfo: () => void
};
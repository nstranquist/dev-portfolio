
import { makeStyles } from '@material-ui/core/styles';

export const useAppStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: '1.6rem'
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

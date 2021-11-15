import React from 'react';
import {
  Avatar,
  Grid,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import FieldContent from './components/FieldContent';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => {
  return {
    subItem: {
      textAlign: 'center',
    },
    title: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    avatar: {
      textAlign: 'center',
      alignSelf: 'flex-end',
      marginRight: 5,
      width: 110,
    },
    avatarImg: {
      [theme.breakpoints.up('md')]: {
        width: 75,
        height: 75,
      },
      [theme.breakpoints.down('sm')]: {
        width: 60,
        height: 60,
      },
      marginBottom: 5,
    },
    avatarName: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: 100,
    },
  };
});

const getAnswerHighlight = (answerCount, isAnswered) => {
  if (answerCount > 1 && isAnswered) return 'outline';
  else if (answerCount > 1 && !isAnswered) return 'contented';
};

const getScoreHighlight = (score) => {
  return score < 0 ? 'text' : '';
};

const transformTitle = (text) => {
  return { __html: text };
};

function QuestionItem({
  title,
  score,
  view_count,
  answer_count,
  is_answered,
  owner = {},
  link,
  style,
}) {
  const classes = useStyles();
  const { display_name, profile_image } = owner;

  const onItemClick = () => {
    window.open(link);
  };

  return (
    <ListItem
      className={classes.root}
      style={style}
      divider
      alignItems='center'
      disableGutters
      button
      onClick={onItemClick}>
      <Grid container direction='column'>
        <ListItem className={classes.title} component='div'>
          <Typography
            variant='h6'
            dangerouslySetInnerHTML={transformTitle(title)}
          />
        </ListItem>
        <ListItem className={classes.subItem} component='div' disableGutters>
          <ListItemText
            primary={
              <Typography color='textSecondary' variant='h6'>
                Score
              </Typography>
            }
            secondary={
              <FieldContent
                value={score}
                highlightType={getScoreHighlight(score)}
              />
            }
          />
          <ListItemText
            primary={
              <Typography color='textSecondary' variant='h6'>
                Answers
              </Typography>
            }
            secondary={
              <FieldContent
                value={answer_count}
                highlightType={getAnswerHighlight(answer_count, is_answered)}
              />
            }
          />
          <ListItemText
            primary={
              <Typography color='textSecondary' variant='h6'>
                Viewed
              </Typography>
            }
            secondary={<FieldContent value={view_count} />}
          />
          <Grid
            className={classes.avatar}
            container
            direction='column'
            alignItems='center'>
            <Grid item>
              <Avatar className={classes.avatarImg} src={profile_image} />
            </Grid>
            <Grid item>
              <Typography className={classes.avatarName}>
                {display_name}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
      </Grid>
    </ListItem>
  );
}

QuestionItem.defaultProps = {
  title: '',
  score: 0,
  view_count: 0,
  answer_count: 0,
  owner: {
    display_name: '---',
    profile_image: null,
  },
  is_answered: false,
};

QuestionItem.propTypes = {
  title: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  view_count: PropTypes.number.isRequired,
};

export default QuestionItem;

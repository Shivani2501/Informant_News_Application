import react from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import useStyles from './styles.js';
import NewsCard from '../NewsCard/NewsCard';
import CardBackgroundImage from '../Asset/Infocard-animated-bg.gif';

const infoCards = [
    { color: '#4527a0', title: 'Latest News', text: 'Show latest news' },
    { color: '#4527a0', title: 'News by Categories', info: 'General, Health, Science, Sports, Technology, Business, Entertainment', text: 'Show news on Sports' },
    { color: '#4527a0', title: 'News by Terms', info: 'Smartphones, Metaverse, Cops, Cryptocurrency, Bikes...', text: 'Show news about smartphones' },
    { color: '#4527a0', title: 'News by Sources', info: 'CNN, The Times of India, Wired, Time, Buzzfeed, IGN...', text: 'Show latest CNN news' },
    { color: '#4527a0', title: 'Reading of news headlines & description by AI', text: 'Read news headlines & description' },
    { color: '#4527a0', title: 'Viewing full article', text: 'Open article number 1' },
    { color: '#4527a0', title: 'Navigation', text: 'Go back' },
    { color: '#4527a0', title: 'About Informant News Application', text: 'Tell me about this news application' }
];

const responsive = {
    LargeDesktop: {
        breakpoint: { max: 4000, min: 1350 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1350, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles();

    if (!articles.length) {
        return (
            <Grow in>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    draggable={false}
                    swipeable={false}
                    centerMode={false}
                    partialVisbile={true}
                    autoPlay={true}
                    autoPlaySpeed={8000}
                    keyBoardControl={true}
                    showDots={false}
                    className={classes.carousel}
                >
                    {infoCards.map((infoCard) => (
                        <div className={classes.card} style={{ backgroundColor: infoCard.color, backgroundImage: `url(${CardBackgroundImage})`}} >
                            <Typography variant="h5" component="h5">{infoCard.title}</Typography>
                            {infoCard.info ? <Typography variant="h6" component="h6"><strong>{infoCard.title.split(' ')[2]}</strong>: <br />{infoCard.info}</Typography> : null}
                            <Typography variant="h6" component="h6">Try saying: <br /> <i>{infoCard.text}</i></Typography>
                        </div>
                    ))}
                </Carousel>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    );
}

export default NewsCards;
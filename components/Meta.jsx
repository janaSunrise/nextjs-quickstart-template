import PropTypes from 'prop-types';
import Head from 'next/head';

const Meta = ({ title, description, author }) => {
    return (
        <Head>
            {title ? <title>{title}</title> : ''}
            {description ? <meta name="description" content={description} /> : ''}
            {author ? <meta name="author" content={author} /> : ''}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    )
}

Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Meta;

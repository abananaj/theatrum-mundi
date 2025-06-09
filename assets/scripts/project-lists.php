<?

add_shortcode('challenges', 'show_challenges');

add_shortcode('results', 'show_results');

add_shortcode('features', 'show_features');

function show_challenges()
{
    $content = '';

    if (have_rows('challenges')) {
        while (have_rows('challenges')) {
            the_row();

            $item = get_sub_field('challenge');

            $content .= '<li>' . $item . '</li>';
        }
    }
    return $content;
}

function show_features()
{
    $content = '';

    if (have_rows('features')) {
        while (have_rows('features')) {
            the_row();

            $item = get_sub_field('feature');

            $content .= '<li>' . $item . '</li>';
        }
    }
    return $content;
}

function show_results()
{
    $content = '';

    if (have_rows('results')) {
        while (have_rows('results')) {
            the_row();

            $item = get_sub_field('result');

            $content .= '<li>' . $item . '</li>';
        }
    }
    return $content;
}

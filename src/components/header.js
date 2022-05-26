/**
 * WordPress dependencies
 */
import { Button, Card, CardHeader } from '@wordpress/components';

import { 
    useState,
    useEffect
} from '@wordpress/element';

export default function Header({ title }) {

    const siteUrl = document.location.origin;

    return(
        <Card>
            <CardHeader>
				<h2>{title}</h2>
                <Button disabled __experimentalIsFocusable>{ siteUrl }</Button>
			</CardHeader>
        </Card>
    )
}
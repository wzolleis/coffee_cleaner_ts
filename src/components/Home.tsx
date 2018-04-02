import * as React from 'react';

type HomeProps = {};

export class Home extends React.Component<HomeProps> {
    render() {
        return (
            <div className="jumbotron centered">
                <h1 className="display-4">Welcome to Coffee Cleaner</h1>
                <p className="lead">
                    Das ist ein Dojo-Beispiel für eine React-UI-Komponente mit Typescript
                    und einer NodeJs-Anwendung für das Backend
                </p>
                <hr className="my-4"/>
                <p>
                   Es wird überall Typescript verwendet, damit Javascript die Typsicherheit bekommt, die es verdient ;-)
                </p>
                <p className="lead">
                    <a  
                        className="btn btn-primary btn-lg" 
                        href="https://wzolleis.gitbooks.io/typescript-basics/content/" 
                        role="button"
                    >
                        Learn more
                    </a>
                </p>
            </div>
        );
    }
}
/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production'; // declaring this production build is for produciton so that other packages can act respectivly 

console.log(chalk.blue('Generating minified bundle for production. This will take a moment ...'));

webpack(webpackConfig).run((err,stats) => {
    if(err){
        console.log(chalk.red(err));
        return 1; 
    }
    
    const jsonStat = stats.toJson();

    if(jsonStat.hasErrors){
        return jsonStat.errors.map(error => console.log(chalk.red(error)));
    }

    if(jsonStat.hasWarnings){
        console.log(chalk.yellow('Webpack generated following warnings: '));
        jsonStat.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeded

    console.log(chalk.green('Your app has been build for production and written to /dist !'));

    return 0; // 0 signifies success
    
});
const builder = require('ui/builder');
const Observable = require('data/observable').Observable;

exports.onNavigatingTo = args => {
    const page = args.object;

    const myName = {
        first: 'Akash',
        last: 'Agrawal'
    };

    page.bindingContext = {
        name: new Observable(myName)
    };

    const container = page.getViewById('container');
    const greeter = builder.load({
        path: 'components/greeter',
        name: 'greeter'
    });
    greeter.framework = 'Angular';
    greeter.name = myName;
    container.addChild(greeter);
};

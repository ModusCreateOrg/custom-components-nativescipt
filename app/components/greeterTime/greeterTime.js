exports.onLoad = args => {
    const container = args.object;

    const frameworkLabel = container.getViewById('fL');
    const nameLabel = container.getViewById('nL');

    frameworkLabel.text = `Hello ${container.framework || 'Nativescript'}`;
    nameLabel.text = `My name is ${container.name.first} ${container.name.last}`;
};

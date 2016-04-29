exports.onLoad = args => {
    const container = args.object;

    container.bindingContext = container.fullName;
};

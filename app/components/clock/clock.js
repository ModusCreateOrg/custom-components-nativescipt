exports.onLoad = args => {
    const label = args.object;

    setInterval(() => {
        label.text = new Date().toString();
    }, 1000);
};

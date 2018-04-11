const debug = require("debug")("[story]")


module.exports = async (ctx, next) => {
    debug(ctx.state.data);
}

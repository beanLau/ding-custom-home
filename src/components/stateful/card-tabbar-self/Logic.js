import PageConst from './Const';

export default {
    defaults(props) {
        return {  empty: true, loading: false, ...PageConst,
            tabbarIndex: 0,
        }
    },

    setTabbarIndex( ctx, data ) {
        ctx.setState({ tabbarIndex:data })
    },

};

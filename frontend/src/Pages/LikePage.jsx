import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { observer } from "mobx-react";
import NoAuthUserLike from "../components/noAuthUser/NoAuthUserLike";
import { useContext } from "react";
import { Context } from "../index";
import LikeMain from "../components/Like/LikeMain";

const LikePage = observer(() => {
    const {userState} = useContext(Context)
    return (
        <>
            {!userState._isAuth ? (
                <>
                    <NoAuthUserLike />
                </>
            ) : (
                <>
                    <Header />
                    <LikeMain />
                    <Footer />
                </>
            )
            }
        </>
    );
});

export default LikePage;
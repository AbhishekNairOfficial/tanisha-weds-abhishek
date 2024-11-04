import TREE_LEFT_IMAGE from '../../assets/landing-page-tree-left.svg';
import TREE_RIGHT_IMAGE from '../../assets/landing-page-tree-right.svg';

const Trees = () => (
    <div className="flex w-screen justify-between absolute">
        <img className="sm:opacity-100 opacity-50" src={TREE_LEFT_IMAGE} loading="lazy" alt="Left Tree" />
        <img className="hidden md:block" src={TREE_RIGHT_IMAGE} loading="lazy" alt="Right Tree" />
    </div>
)

export default Trees
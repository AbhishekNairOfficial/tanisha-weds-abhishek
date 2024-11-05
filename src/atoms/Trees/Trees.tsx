import TREE_LEFT_IMAGE from '../../assets/landing-page-tree-left.webp';
import TREE_RIGHT_IMAGE from '../../assets/landing-page-tree-right.webp';

const Trees = () => (
    <div className="flex w-screen justify-between absolute">
        <img className="sm:opacity-100 opacity-50" src={TREE_LEFT_IMAGE} loading="eager" alt="Left Tree" />
        <img className="hidden md:block" src={TREE_RIGHT_IMAGE} loading="eager" alt="Right Tree" />
    </div>
)

export default Trees
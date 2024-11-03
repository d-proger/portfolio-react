import gitHubIcon from './gitHub-black.svg'
const BtnGitHab = (props) => {
    return (
        props.link ? <a href={props.link} className="btn-outline">
            <img src={gitHubIcon} alt="" />
            GitHub repo
        </a> : null
    );
}

export default BtnGitHab;
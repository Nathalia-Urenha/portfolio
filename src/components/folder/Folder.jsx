import './folder.scss';

export default function Folder({path, title}) {
  return (
    <a className="folder" href={path} target="_blank" rel="noopener noreferrer">
        <img src="assets/folderr.png" alt="projeto" />
        <span>{title}</span>
    </a>
  )
}

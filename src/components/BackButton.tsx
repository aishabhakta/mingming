import Link from "next/link";

export default function BackButton() {
  return (
    <div className="backRow">
      <Link className="btn" href="/">
        ← Back
      </Link>
    </div>
  );
}

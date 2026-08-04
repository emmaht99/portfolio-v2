export default async function Page(props: PageProps<"/work/[project]">) {
  const { project } = await props.params;
  return <h1>Project: {project}</h1>;
}

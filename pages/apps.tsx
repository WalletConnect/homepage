import { APPS_API_URL, TIME_TO_REVALIDATION } from "../common/constants";
import { IDisplayElementProps } from "../common/types";
import Banner from "../components/Banner";
import LogoDisplay from "../components/LogoDisplay";
import MessageToUser from "../components/MessageToUser";

const Apps = ({ data, ids }: IDisplayElementProps) => (
  <main className="flex flex-col mx-8 mt-12 space-y-10 text-center align-middle">
    <Banner title="dApps">
      Following decentralised finance and blockchain applications support
      WalletConnect wallets.
    </Banner>
    <LogoDisplay data={data} ids={ids} />
    <div className="mt-10" />
    <MessageToUser type="dapp" />
  </main>
);
export default Apps;

export const getStaticProps = async () => {
  const res = await fetch(APPS_API_URL);
  const data = await res.json();
  const ids = Object.keys(data);

  return { props: { data, ids }, revalidate: TIME_TO_REVALIDATION };
};

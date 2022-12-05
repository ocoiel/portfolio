import { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";
import { TbMusicOff, TbMusic } from "react-icons/tb";
import Link from "next/link";

function About () {

  const [enabled, setEnabled] = useState(false)

  return (
    <div className="flex flex-1 flex-col">
      <Switch checked={enabled} onChange={setEnabled} as={Fragment}>
      {({ checked }: { checked: boolean }) => (
        /* Use the `checked` state to conditionally style the button. */
        <div className="flex p-8 m-2 justify-between items-center w-40">
          <button
          className={`${
            checked ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-transparent'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">Enable music</span>
          <span
            className={`${
              checked ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
          </button>
          {checked ? <TbMusic className="text-4xl" /> : <TbMusicOff className="text-4xl" />}
        </div>
      )}
      </Switch>
      <Link className="w-2" href={"/"}>Voltar pra home</Link>
    </div>
  )
}

export default About;

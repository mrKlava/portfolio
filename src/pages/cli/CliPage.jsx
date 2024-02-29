import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../../assets/data/dataEN'

import './cli-page.scss'


function CliPage() {
  const commands = {
    list: ['ls', 'help', 'whoami', 'exit', 'clear', 'about', 'journey', 'designs', 'projects', 'contacts'],

    handleCommand(command) {
      setHistory([...history, command])

      if (this.list.includes(command)) {
        if (command !== 'clear') {
          setOutput([...output, `$ ${command}`, ...this[command](command)])
        } else {
          this.clear()
        }
      } else {
        setOutput([...output, `$ ${command}`, ...this.invalid(command)])
      }

      setInput('')

      inputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start"
      });
    },

    ls() {
      return [
        '-rw-r--r-- 42 user user 0 march 12 16:22 about.json', 
        '-rw-r--r-- 42 user user 0 april 23 13:01 journey.json',
        '-rw-r--r-- 42 user user 0 july 3 08:15 designs.json',
        '-rw-r--r-- 42 user user 0 december 3 10:02 project.json',
        '-rw-r--r-- 42 user user 0 march 7 21:37 contacts.json',
        '---------- 1 root root 0 june 1 00:42 secret'
      ]
    },

    help() {
      return ["--- Good day User! ---", "you have following list of commands:", "* ls - list all files", "* help - list all commands", "* whoami - see who am I", "* clear - clear terminal", "* about - get short bio", "* journey - get list of experience", "* designs - get list of designs", "* projects - get list of projects", "* contacts - how you can contact me", "* exit - go back to GUI"]
    },

    whoami() {
      return ['-', `Hello, I am ${data.about.card.subtitle},`, 'and you are one curious user!', '-']
    },

    invalid(command) {
      return [`Invalid command - ${command}`, 'Run: help']
    },

    exit() {
      setTimeout(() => {
        toMainPage()
      }, 1500)

      return ['Good Bye!']
    },

    clear() {
      setOutput([])
      setInput('')
      return []
    },

    about() {
      return [data.about.card.text]
    },

    journey() {
      return data.journey.cards.map((i) => {
        return `* ${i.infobar[0]} - ${i.subtitle} - ${i.title}`
      })
    },
    designs() {
      return data.designs.cards.map((i) => {
        return `* ${i.title} - ${i.link}`
      })
    },
    projects() {
      return data.works.cards.map((i) => {
        return `* ${i.title} - ${i.subtitle} - TECH: ${i.info.join('; ')}`
      })
    },
    contacts() {
      return data.contacts.info.map((i) => {
        return `* ${i.name} - ${i.src}`
      })
    },
  }

  /* States and Refs */
  const [output, setOutput] = useState(['Welcome to CLI'])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [history, setHistory] = useState([])

  const inputRef = useRef(null);

  const navigate = useNavigate()

  /* Event handlers */
  const handleInput = (e) => setInput(e.target.value)

  const handleKeys = (e) => {
    if (e.keyCode === 13 && input) {  // handle enter
      setIndex(history.length)

      commands.handleCommand(input)

    } else if (e.keyCode === 38) {  // handle arrow up
      if (index < history.length && history.length > 0) {
        if (index !== history.length - 1) setIndex(index + 1)
        setInput(history[index])
      }
    } else if (e.keyCode === 40) {  // handle arrow down
      if (index < history.length && index >= 0) {
        if (index !== 0) setIndex(index - 1)
        setInput(history[index])
      }
    }
  }

  /* Helpers */
  const toMainPage = () => navigate('/portfolio')

  /* Booting part */

  const loading = <p>
  <br/>  Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  <br/>  Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  <br/>  Get:4 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2267 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2649 kB]
  <br/>  Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [362 kB]
  <br/>  Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [13.0 kB]
  <br/>  Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [1885 kB]
  <br/>  Get:10 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [264 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [16.9 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1074 kB]
  <br/>  Get:13 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [849 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [256 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [25.1 kB]
  <br/>  Get:16 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [176 kB]
  <br/>  Get:17 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [18.6 kB]
  <br/>  Fetched 10.2 MB in 2s (4130 kB/s)
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  54 packages can be upgraded. Run 'apt list --upgradable' to see them.
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  Calculating upgrade... Done
  <br/>  The following packages will be upgraded:
  <br/>    bind9-dnsutils bind9-host bind9-libs bsdutils fdisk fwupd fwupd-signed libblkid1 libc-ares2 libcap2 libcap2-bin
  <br/>    libcups2 libfdisk1 libfwupd2 libfwupdplugin5 libglib2.0-0 libglib2.0-bin libglib2.0-data libmount1 libnghttp2-14
  <br/>    libnss-systemd libpam-cap libpam-systemd libperl5.30 libpython3.8 libpython3.8-minimal libpython3.8-stdlib
  <br/>    libsmartcols1 libssh-4 libsystemd0 libudev1 libuuid1 libx11-6 libx11-data libx11-dev libx11-xcb1 mount perl
  <br/>    perl-base perl-modules-5.30 python3-requests python3.8 python3.8-minimal systemd systemd-sysv systemd-timesyncd udev
  <br/>    util-linux uuid-runtime vim vim-common vim-runtime vim-tiny xxd
  <br/>  54 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
  <br/>  32 standard LTS security updates
  <br/>  Need to get 37.7 MB of archives.
  <br/>  After this operation, 9216 B of additional disk space will be used.
  <br/>  Do you want to continue? [Y/n] y
  <br/>  Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 bsdutils amd64 1:2.34-0.1ubuntu9.4 [63.0 kB]
  <br/>  Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libperl5.30 amd64 5.30.0-9ubuntu0.4 [3959 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl amd64 5.30.0-9ubuntu0.4 [224 kB]
  <br/>  Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-base amd64 5.30.0-9ubuntu0.4 [1514 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-modules-5.30 all 5.30.0-9ubuntu0.4 [2739 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libblkid1 amd64 2.34-0.1ubuntu9.4 [137 kB]
  <br/>  Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libuuid1 amd64 2.34-0.1ubuntu9.4 [20.0 kB]
  <br/>  Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libfdisk1 amd64 2.34-0.1ubuntu9.4 [174 kB]
  <br/>  Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libmount1 amd64 2.34-0.1ubuntu9.4 [150 kB]
  <br/>  Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsmartcols1 amd64 2.34-0.1ubuntu9.4 [100 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 fdisk amd64 2.34-0.1ubuntu9.4 [119 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 util-linux amd64 2.34-0.1ubuntu9.4 [1021 kB]
  <br/>  Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libnss-systemd amd64 245.4-4ubuntu3.22 [95.8 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 udev amd64 245.4-4ubuntu3.22 [1366 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libudev1 amd64 245.4-4ubuntu3.22 [75.4 kB]
  <br/>  Get:16 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-sysv amd64 245.4-4ubuntu3.22 [10.3 kB]
  <br/>  Get:17 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-timesyncd amd64 245.4-4ubuntu3.22 [28.1 kB]
  <br/>  Get:18 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-systemd amd64 245.4-4ubuntu3.22 [186 kB]
  <br/>  Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcap2 amd64 1:2.32-1ubuntu0.1 [15.8 kB]
  <br/>  Get:20 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 mount amd64 2.34-0.1ubuntu9.4 [115 kB]
  <br/>  Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd amd64 245.4-4ubuntu3.22 [3811 kB]
  <br/>  Get:22 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsystemd0 amd64 245.4-4ubuntu3.22 [267 kB]
  <br/>  Get:23 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8 amd64 3.8.10-0ubuntu1~20.04.8 [1625 kB]
  <br/>  Get:24 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8 amd64 3.8.10-0ubuntu1~20.04.8 [387 kB]
  <br/>  Get:25 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-stdlib amd64 3.8.10-0ubuntu1~20.04.8 [1675 kB]
  <br/>  Get:26 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [1902 kB]
  <br/>  Get:27 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [717 kB]
  <br/>  Get:28 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 uuid-runtime amd64 2.34-0.1ubuntu9.4 [35.4 kB]
  <br/>  Get:29 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-cap amd64 1:2.32-1ubuntu0.1 [8364 B]
  <br/>  Setting up vim-runtime (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up libpython3.8-stdlib:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up python3.8 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-host (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up libfwupdplugin5:amd64 (1.7.9-1~20.04.3) ...
  <br/>  Setting up libpam-cap:amd64 (1:2.32-1ubuntu0.1) ...
  <br/>  Setting up fwupd (1.7.9-1~20.04.3) ...
  <br/>  Setting up libx11-dev:amd64 (2:1.6.9-2ubuntu1.5) ...
  <br/>  Setting up libglib2.0-bin (2.64.6-1~ubuntu20.04.6) ...
  <br/>  Setting up vim-tiny (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up fdisk (2.34-0.1ubuntu9.4) ...
  <br/>  Setting up perl (5.30.0-9ubuntu0.4) ...
  <br/>  Setting up libpython3.8:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-dnsutils (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up vim (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up systemd-timesyncd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd-sysv (245.4-4ubuntu3.22) ...
  <br/>  Setting up libnss-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Setting up libpam-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Processing triggers for mime-support (3.64ubuntu1) ...
  <br/>  Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
  <br/>  /sbin/ldconfig.real: /usr/lib/wsl/lib/libcuda.so.1 is not a symbolic link
<br/>
  <br/>  Processing triggers for man-db (2.9.1-1) ...
  <br/>  Processing triggers for dbus (1.12.16-2ubuntu2.3) ...
  <br/>  Processing triggers for initramfs-tools (0.136ubuntu6.7) ...
  <br/>  Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  <br/>  Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  <br/>  Get:4 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2267 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2649 kB]
  <br/>  Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [362 kB]
  <br/>  Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [13.0 kB]
  <br/>  Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [1885 kB]
  <br/>  Get:10 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [264 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [16.9 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1074 kB]
  <br/>  Get:13 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [849 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [256 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [25.1 kB]
  <br/>  Get:16 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [176 kB]
  <br/>  Get:17 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [18.6 kB]
  <br/>  Fetched 10.2 MB in 2s (4130 kB/s)
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  54 packages can be upgraded. Run 'apt list --upgradable' to see them.
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  Calculating upgrade... Done
  <br/>  The following packages will be upgraded:
  <br/>    bind9-dnsutils bind9-host bind9-libs bsdutils fdisk fwupd fwupd-signed libblkid1 libc-ares2 libcap2 libcap2-bin
  <br/>    libcups2 libfdisk1 libfwupd2 libfwupdplugin5 libglib2.0-0 libglib2.0-bin libglib2.0-data libmount1 libnghttp2-14
  <br/>    libnss-systemd libpam-cap libpam-systemd libperl5.30 libpython3.8 libpython3.8-minimal libpython3.8-stdlib
  <br/>    libsmartcols1 libssh-4 libsystemd0 libudev1 libuuid1 libx11-6 libx11-data libx11-dev libx11-xcb1 mount perl
  <br/>    perl-base perl-modules-5.30 python3-requests python3.8 python3.8-minimal systemd systemd-sysv systemd-timesyncd udev
  <br/>    util-linux uuid-runtime vim vim-common vim-runtime vim-tiny xxd
  <br/>  54 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
  <br/>  32 standard LTS security updates
  <br/>  Need to get 37.7 MB of archives.
  <br/>  After this operation, 9216 B of additional disk space will be used.
  <br/>  Do you want to continue? [Y/n] y
  <br/>  Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 bsdutils amd64 1:2.34-0.1ubuntu9.4 [63.0 kB]
  <br/>  Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libperl5.30 amd64 5.30.0-9ubuntu0.4 [3959 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl amd64 5.30.0-9ubuntu0.4 [224 kB]
  <br/>  Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-base amd64 5.30.0-9ubuntu0.4 [1514 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-modules-5.30 all 5.30.0-9ubuntu0.4 [2739 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libblkid1 amd64 2.34-0.1ubuntu9.4 [137 kB]
  <br/>  Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libuuid1 amd64 2.34-0.1ubuntu9.4 [20.0 kB]
  <br/>  Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libfdisk1 amd64 2.34-0.1ubuntu9.4 [174 kB]
  <br/>  Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libmount1 amd64 2.34-0.1ubuntu9.4 [150 kB]
  <br/>  Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsmartcols1 amd64 2.34-0.1ubuntu9.4 [100 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 fdisk amd64 2.34-0.1ubuntu9.4 [119 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 util-linux amd64 2.34-0.1ubuntu9.4 [1021 kB]
  <br/>  Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libnss-systemd amd64 245.4-4ubuntu3.22 [95.8 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 udev amd64 245.4-4ubuntu3.22 [1366 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libudev1 amd64 245.4-4ubuntu3.22 [75.4 kB]
  <br/>  Get:16 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-sysv amd64 245.4-4ubuntu3.22 [10.3 kB]
  <br/>  Get:17 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-timesyncd amd64 245.4-4ubuntu3.22 [28.1 kB]
  <br/>  Get:18 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-systemd amd64 245.4-4ubuntu3.22 [186 kB]
  <br/>  Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcap2 amd64 1:2.32-1ubuntu0.1 [15.8 kB]
  <br/>  Get:20 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 mount amd64 2.34-0.1ubuntu9.4 [115 kB]
  <br/>  Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd amd64 245.4-4ubuntu3.22 [3811 kB]
  <br/>  Get:22 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsystemd0 amd64 245.4-4ubuntu3.22 [267 kB]
  <br/>  Get:23 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8 amd64 3.8.10-0ubuntu1~20.04.8 [1625 kB]
  <br/>  Get:24 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8 amd64 3.8.10-0ubuntu1~20.04.8 [387 kB]
  <br/>  Get:25 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-stdlib amd64 3.8.10-0ubuntu1~20.04.8 [1675 kB]
  <br/>  Get:26 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [1902 kB]
  <br/>  Get:27 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [717 kB]
  <br/>  Get:28 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 uuid-runtime amd64 2.34-0.1ubuntu9.4 [35.4 kB]
  <br/>  Get:29 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-cap amd64 1:2.32-1ubuntu0.1 [8364 B]
  <br/>  Setting up vim-runtime (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up libpython3.8-stdlib:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up python3.8 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-host (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up libfwupdplugin5:amd64 (1.7.9-1~20.04.3) ...
  <br/>  Setting up libpam-cap:amd64 (1:2.32-1ubuntu0.1) ...
  <br/>  Setting up fwupd (1.7.9-1~20.04.3) ...
  <br/>  Setting up libx11-dev:amd64 (2:1.6.9-2ubuntu1.5) ...
  <br/>  Setting up libglib2.0-bin (2.64.6-1~ubuntu20.04.6) ...
  <br/>  Setting up vim-tiny (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up fdisk (2.34-0.1ubuntu9.4) ...
  <br/>  Setting up perl (5.30.0-9ubuntu0.4) ...
  <br/>  Setting up libpython3.8:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-dnsutils (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up vim (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up systemd-timesyncd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd-sysv (245.4-4ubuntu3.22) ...
  <br/>  Setting up libnss-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Setting up libpam-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Processing triggers for mime-support (3.64ubuntu1) ...
  <br/>  Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
  <br/>  /sbin/ldconfig.real: /usr/lib/wsl/lib/libcuda.so.1 is not a symbolic link
<br/>
  <br/>  Processing triggers for man-db (2.9.1-1) ...
  <br/>  Processing triggers for dbus (1.12.16-2ubuntu2.3) ...
  <br/>  Processing triggers for initramfs-tools (0.136ubuntu6.7) ...
  <br/>  Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  <br/>  Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  <br/>  Get:4 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2267 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2649 kB]
  <br/>  Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [362 kB]
  <br/>  Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [13.0 kB]
  <br/>  Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [1885 kB]
  <br/>  Get:10 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [264 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [16.9 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1074 kB]
  <br/>  Get:13 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [849 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [256 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [25.1 kB]
  <br/>  Get:16 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [176 kB]
  <br/>  Get:17 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [18.6 kB]
  <br/>  Fetched 10.2 MB in 2s (4130 kB/s)
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  54 packages can be upgraded. Run 'apt list --upgradable' to see them.
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  Calculating upgrade... Done
  <br/>  The following packages will be upgraded:
  <br/>    bind9-dnsutils bind9-host bind9-libs bsdutils fdisk fwupd fwupd-signed libblkid1 libc-ares2 libcap2 libcap2-bin
  <br/>    libcups2 libfdisk1 libfwupd2 libfwupdplugin5 libglib2.0-0 libglib2.0-bin libglib2.0-data libmount1 libnghttp2-14
  <br/>    libnss-systemd libpam-cap libpam-systemd libperl5.30 libpython3.8 libpython3.8-minimal libpython3.8-stdlib
  <br/>    libsmartcols1 libssh-4 libsystemd0 libudev1 libuuid1 libx11-6 libx11-data libx11-dev libx11-xcb1 mount perl
  <br/>    perl-base perl-modules-5.30 python3-requests python3.8 python3.8-minimal systemd systemd-sysv systemd-timesyncd udev
  <br/>    util-linux uuid-runtime vim vim-common vim-runtime vim-tiny xxd
  <br/>  54 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
  <br/>  32 standard LTS security updates
  <br/>  Need to get 37.7 MB of archives.
  <br/>  After this operation, 9216 B of additional disk space will be used.
  <br/>  Do you want to continue? [Y/n] y
  <br/>  Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 bsdutils amd64 1:2.34-0.1ubuntu9.4 [63.0 kB]
  <br/>  Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libperl5.30 amd64 5.30.0-9ubuntu0.4 [3959 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl amd64 5.30.0-9ubuntu0.4 [224 kB]
  <br/>  Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-base amd64 5.30.0-9ubuntu0.4 [1514 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-modules-5.30 all 5.30.0-9ubuntu0.4 [2739 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libblkid1 amd64 2.34-0.1ubuntu9.4 [137 kB]
  <br/>  Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libuuid1 amd64 2.34-0.1ubuntu9.4 [20.0 kB]
  <br/>  Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libfdisk1 amd64 2.34-0.1ubuntu9.4 [174 kB]
  <br/>  Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libmount1 amd64 2.34-0.1ubuntu9.4 [150 kB]
  <br/>  Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsmartcols1 amd64 2.34-0.1ubuntu9.4 [100 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 fdisk amd64 2.34-0.1ubuntu9.4 [119 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 util-linux amd64 2.34-0.1ubuntu9.4 [1021 kB]
  <br/>  Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libnss-systemd amd64 245.4-4ubuntu3.22 [95.8 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 udev amd64 245.4-4ubuntu3.22 [1366 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libudev1 amd64 245.4-4ubuntu3.22 [75.4 kB]
  <br/>  Get:16 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-sysv amd64 245.4-4ubuntu3.22 [10.3 kB]
  <br/>  Get:17 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-timesyncd amd64 245.4-4ubuntu3.22 [28.1 kB]
  <br/>  Get:18 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-systemd amd64 245.4-4ubuntu3.22 [186 kB]
  <br/>  Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcap2 amd64 1:2.32-1ubuntu0.1 [15.8 kB]
  <br/>  Get:20 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 mount amd64 2.34-0.1ubuntu9.4 [115 kB]
  <br/>  Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd amd64 245.4-4ubuntu3.22 [3811 kB]
  <br/>  Get:22 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsystemd0 amd64 245.4-4ubuntu3.22 [267 kB]
  <br/>  Get:23 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8 amd64 3.8.10-0ubuntu1~20.04.8 [1625 kB]
  <br/>  Get:24 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8 amd64 3.8.10-0ubuntu1~20.04.8 [387 kB]
  <br/>  Get:25 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-stdlib amd64 3.8.10-0ubuntu1~20.04.8 [1675 kB]
  <br/>  Get:26 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [1902 kB]
  <br/>  Get:27 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [717 kB]
  <br/>  Get:28 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 uuid-runtime amd64 2.34-0.1ubuntu9.4 [35.4 kB]
  <br/>  Get:29 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-cap amd64 1:2.32-1ubuntu0.1 [8364 B]
  <br/>  Setting up vim-runtime (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up libpython3.8-stdlib:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up python3.8 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-host (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up libfwupdplugin5:amd64 (1.7.9-1~20.04.3) ...
  <br/>  Setting up libpam-cap:amd64 (1:2.32-1ubuntu0.1) ...
  <br/>  Setting up fwupd (1.7.9-1~20.04.3) ...
  <br/>  Setting up libx11-dev:amd64 (2:1.6.9-2ubuntu1.5) ...
  <br/>  Setting up libglib2.0-bin (2.64.6-1~ubuntu20.04.6) ...
  <br/>  Setting up vim-tiny (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up fdisk (2.34-0.1ubuntu9.4) ...
  <br/>  Setting up perl (5.30.0-9ubuntu0.4) ...
  <br/>  Setting up libpython3.8:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-dnsutils (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up vim (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up systemd-timesyncd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd-sysv (245.4-4ubuntu3.22) ...
  <br/>  Setting up libnss-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Setting up libpam-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Processing triggers for mime-support (3.64ubuntu1) ...
  <br/>  Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
  <br/>  /sbin/ldconfig.real: /usr/lib/wsl/lib/libcuda.so.1 is not a symbolic link
<br/>
  <br/>  Processing triggers for man-db (2.9.1-1) ...
  <br/>  Processing triggers for dbus (1.12.16-2ubuntu2.3) ...
  <br/>  Processing triggers for initramfs-tools (0.136ubuntu6.7) ...
  <br/>  Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  <br/>  Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  <br/>  Get:4 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2267 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2649 kB]
  <br/>  Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [362 kB]
  <br/>  Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [13.0 kB]
  <br/>  Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [1885 kB]
  <br/>  Get:10 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [264 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [16.9 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1074 kB]
  <br/>  Get:13 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [849 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [256 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [25.1 kB]
  <br/>  Get:16 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [176 kB]
  <br/>  Get:17 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [18.6 kB]
  <br/>  Fetched 10.2 MB in 2s (4130 kB/s)
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  54 packages can be upgraded. Run 'apt list --upgradable' to see them.
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  Calculating upgrade... Done
  <br/>  The following packages will be upgraded:
  <br/>    bind9-dnsutils bind9-host bind9-libs bsdutils fdisk fwupd fwupd-signed libblkid1 libc-ares2 libcap2 libcap2-bin
  <br/>    libcups2 libfdisk1 libfwupd2 libfwupdplugin5 libglib2.0-0 libglib2.0-bin libglib2.0-data libmount1 libnghttp2-14
  <br/>    libnss-systemd libpam-cap libpam-systemd libperl5.30 libpython3.8 libpython3.8-minimal libpython3.8-stdlib
  <br/>    libsmartcols1 libssh-4 libsystemd0 libudev1 libuuid1 libx11-6 libx11-data libx11-dev libx11-xcb1 mount perl
  <br/>    perl-base perl-modules-5.30 python3-requests python3.8 python3.8-minimal systemd systemd-sysv systemd-timesyncd udev
  <br/>    util-linux uuid-runtime vim vim-common vim-runtime vim-tiny xxd
  <br/>  54 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
  <br/>  32 standard LTS security updates
  <br/>  Need to get 37.7 MB of archives.
  <br/>  After this operation, 9216 B of additional disk space will be used.
  <br/>  Do you want to continue? [Y/n] y
  <br/>  Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 bsdutils amd64 1:2.34-0.1ubuntu9.4 [63.0 kB]
  <br/>  Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libperl5.30 amd64 5.30.0-9ubuntu0.4 [3959 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl amd64 5.30.0-9ubuntu0.4 [224 kB]
  <br/>  Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-base amd64 5.30.0-9ubuntu0.4 [1514 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-modules-5.30 all 5.30.0-9ubuntu0.4 [2739 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libblkid1 amd64 2.34-0.1ubuntu9.4 [137 kB]
  <br/>  Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libuuid1 amd64 2.34-0.1ubuntu9.4 [20.0 kB]
  <br/>  Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libfdisk1 amd64 2.34-0.1ubuntu9.4 [174 kB]
  <br/>  Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libmount1 amd64 2.34-0.1ubuntu9.4 [150 kB]
  <br/>  Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsmartcols1 amd64 2.34-0.1ubuntu9.4 [100 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 fdisk amd64 2.34-0.1ubuntu9.4 [119 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 util-linux amd64 2.34-0.1ubuntu9.4 [1021 kB]
  <br/>  Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libnss-systemd amd64 245.4-4ubuntu3.22 [95.8 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 udev amd64 245.4-4ubuntu3.22 [1366 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libudev1 amd64 245.4-4ubuntu3.22 [75.4 kB]
  <br/>  Get:16 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-sysv amd64 245.4-4ubuntu3.22 [10.3 kB]
  <br/>  Get:17 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-timesyncd amd64 245.4-4ubuntu3.22 [28.1 kB]
  <br/>  Get:18 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-systemd amd64 245.4-4ubuntu3.22 [186 kB]
  <br/>  Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcap2 amd64 1:2.32-1ubuntu0.1 [15.8 kB]
  <br/>  Get:20 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 mount amd64 2.34-0.1ubuntu9.4 [115 kB]
  <br/>  Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd amd64 245.4-4ubuntu3.22 [3811 kB]
  <br/>  Get:22 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsystemd0 amd64 245.4-4ubuntu3.22 [267 kB]
  <br/>  Get:23 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8 amd64 3.8.10-0ubuntu1~20.04.8 [1625 kB]
  <br/>  Get:24 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8 amd64 3.8.10-0ubuntu1~20.04.8 [387 kB]
  <br/>  Get:25 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-stdlib amd64 3.8.10-0ubuntu1~20.04.8 [1675 kB]
  <br/>  Get:26 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [1902 kB]
  <br/>  Get:27 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [717 kB]
  <br/>  Get:28 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 uuid-runtime amd64 2.34-0.1ubuntu9.4 [35.4 kB]
  <br/>  Get:29 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-cap amd64 1:2.32-1ubuntu0.1 [8364 B]
  <br/>  Setting up vim-runtime (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up libpython3.8-stdlib:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up python3.8 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-host (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up libfwupdplugin5:amd64 (1.7.9-1~20.04.3) ...
  <br/>  Setting up libpam-cap:amd64 (1:2.32-1ubuntu0.1) ...
  <br/>  Setting up fwupd (1.7.9-1~20.04.3) ...
  <br/>  Setting up libx11-dev:amd64 (2:1.6.9-2ubuntu1.5) ...
  <br/>  Setting up libglib2.0-bin (2.64.6-1~ubuntu20.04.6) ...
  <br/>  Setting up vim-tiny (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up fdisk (2.34-0.1ubuntu9.4) ...
  <br/>  Setting up perl (5.30.0-9ubuntu0.4) ...
  <br/>  Setting up libpython3.8:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-dnsutils (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up vim (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up systemd-timesyncd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd-sysv (245.4-4ubuntu3.22) ...
  <br/>  Setting up libnss-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Setting up libpam-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Processing triggers for mime-support (3.64ubuntu1) ...
  <br/>  Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
  <br/>  /sbin/ldconfig.real: /usr/lib/wsl/lib/libcuda.so.1 is not a symbolic link
<br/>
  <br/>  Processing triggers for man-db (2.9.1-1) ...
  <br/>  Processing triggers for dbus (1.12.16-2ubuntu2.3) ...
  <br/>  Processing triggers for initramfs-tools (0.136ubuntu6.7) ...
  <br/>  Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  <br/>  Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  <br/>  Get:4 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2267 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2649 kB]
  <br/>  Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [362 kB]
  <br/>  Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [13.0 kB]
  <br/>  Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [1885 kB]
  <br/>  Get:10 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [264 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [16.9 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1074 kB]
  <br/>  Get:13 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [849 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [256 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [25.1 kB]
  <br/>  Get:16 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [176 kB]
  <br/>  Get:17 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [18.6 kB]
  <br/>  Fetched 10.2 MB in 2s (4130 kB/s)
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  54 packages can be upgraded. Run 'apt list --upgradable' to see them.
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  Calculating upgrade... Done
  <br/>  The following packages will be upgraded:
  <br/>    bind9-dnsutils bind9-host bind9-libs bsdutils fdisk fwupd fwupd-signed libblkid1 libc-ares2 libcap2 libcap2-bin
  <br/>    libcups2 libfdisk1 libfwupd2 libfwupdplugin5 libglib2.0-0 libglib2.0-bin libglib2.0-data libmount1 libnghttp2-14
  <br/>    libnss-systemd libpam-cap libpam-systemd libperl5.30 libpython3.8 libpython3.8-minimal libpython3.8-stdlib
  <br/>    libsmartcols1 libssh-4 libsystemd0 libudev1 libuuid1 libx11-6 libx11-data libx11-dev libx11-xcb1 mount perl
  <br/>    perl-base perl-modules-5.30 python3-requests python3.8 python3.8-minimal systemd systemd-sysv systemd-timesyncd udev
  <br/>    util-linux uuid-runtime vim vim-common vim-runtime vim-tiny xxd
  <br/>  54 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
  <br/>  32 standard LTS security updates
  <br/>  Need to get 37.7 MB of archives.
  <br/>  After this operation, 9216 B of additional disk space will be used.
  <br/>  Do you want to continue? [Y/n] y
  <br/>  Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 bsdutils amd64 1:2.34-0.1ubuntu9.4 [63.0 kB]
  <br/>  Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libperl5.30 amd64 5.30.0-9ubuntu0.4 [3959 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl amd64 5.30.0-9ubuntu0.4 [224 kB]
  <br/>  Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-base amd64 5.30.0-9ubuntu0.4 [1514 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-modules-5.30 all 5.30.0-9ubuntu0.4 [2739 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libblkid1 amd64 2.34-0.1ubuntu9.4 [137 kB]
  <br/>  Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libuuid1 amd64 2.34-0.1ubuntu9.4 [20.0 kB]
  <br/>  Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libfdisk1 amd64 2.34-0.1ubuntu9.4 [174 kB]
  <br/>  Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libmount1 amd64 2.34-0.1ubuntu9.4 [150 kB]
  <br/>  Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsmartcols1 amd64 2.34-0.1ubuntu9.4 [100 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 fdisk amd64 2.34-0.1ubuntu9.4 [119 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 util-linux amd64 2.34-0.1ubuntu9.4 [1021 kB]
  <br/>  Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libnss-systemd amd64 245.4-4ubuntu3.22 [95.8 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 udev amd64 245.4-4ubuntu3.22 [1366 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libudev1 amd64 245.4-4ubuntu3.22 [75.4 kB]
  <br/>  Get:16 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-sysv amd64 245.4-4ubuntu3.22 [10.3 kB]
  <br/>  Get:17 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-timesyncd amd64 245.4-4ubuntu3.22 [28.1 kB]
  <br/>  Get:18 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-systemd amd64 245.4-4ubuntu3.22 [186 kB]
  <br/>  Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcap2 amd64 1:2.32-1ubuntu0.1 [15.8 kB]
  <br/>  Get:20 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 mount amd64 2.34-0.1ubuntu9.4 [115 kB]
  <br/>  Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd amd64 245.4-4ubuntu3.22 [3811 kB]
  <br/>  Get:22 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsystemd0 amd64 245.4-4ubuntu3.22 [267 kB]
  <br/>  Get:23 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8 amd64 3.8.10-0ubuntu1~20.04.8 [1625 kB]
  <br/>  Get:24 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8 amd64 3.8.10-0ubuntu1~20.04.8 [387 kB]
  <br/>  Get:25 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-stdlib amd64 3.8.10-0ubuntu1~20.04.8 [1675 kB]
  <br/>  Get:26 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [1902 kB]
  <br/>  Get:27 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [717 kB]
  <br/>  Get:28 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 uuid-runtime amd64 2.34-0.1ubuntu9.4 [35.4 kB]
  <br/>  Get:29 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-cap amd64 1:2.32-1ubuntu0.1 [8364 B]
  <br/>  Setting up vim-runtime (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up libpython3.8-stdlib:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up python3.8 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-host (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up libfwupdplugin5:amd64 (1.7.9-1~20.04.3) ...
  <br/>  Setting up libpam-cap:amd64 (1:2.32-1ubuntu0.1) ...
  <br/>  Setting up fwupd (1.7.9-1~20.04.3) ...
  <br/>  Setting up libx11-dev:amd64 (2:1.6.9-2ubuntu1.5) ...
  <br/>  Setting up libglib2.0-bin (2.64.6-1~ubuntu20.04.6) ...
  <br/>  Setting up vim-tiny (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up fdisk (2.34-0.1ubuntu9.4) ...
  <br/>  Setting up perl (5.30.0-9ubuntu0.4) ...
  <br/>  Setting up libpython3.8:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-dnsutils (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up vim (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up systemd-timesyncd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd-sysv (245.4-4ubuntu3.22) ...
  <br/>  Setting up libnss-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Setting up libpam-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Processing triggers for mime-support (3.64ubuntu1) ...
  <br/>  Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
  <br/>  /sbin/ldconfig.real: /usr/lib/wsl/lib/libcuda.so.1 is not a symbolic link
<br/>
  <br/>  Processing triggers for man-db (2.9.1-1) ...
  <br/>  Processing triggers for dbus (1.12.16-2ubuntu2.3) ...
  <br/>  Processing triggers for initramfs-tools (0.136ubuntu6.7) ...
  <br/>  Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  <br/>  Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  <br/>  Get:4 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2267 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2649 kB]
  <br/>  Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [362 kB]
  <br/>  Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [13.0 kB]
  <br/>  Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [1885 kB]
  <br/>  Get:10 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [264 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [16.9 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1074 kB]
  <br/>  Get:13 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [849 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [256 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [25.1 kB]
  <br/>  Get:16 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [176 kB]
  <br/>  Get:17 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [18.6 kB]
  <br/>  Fetched 10.2 MB in 2s (4130 kB/s)
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  54 packages can be upgraded. Run 'apt list --upgradable' to see them.
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  Calculating upgrade... Done
  <br/>  The following packages will be upgraded:
  <br/>    bind9-dnsutils bind9-host bind9-libs bsdutils fdisk fwupd fwupd-signed libblkid1 libc-ares2 libcap2 libcap2-bin
  <br/>    libcups2 libfdisk1 libfwupd2 libfwupdplugin5 libglib2.0-0 libglib2.0-bin libglib2.0-data libmount1 libnghttp2-14
  <br/>    libnss-systemd libpam-cap libpam-systemd libperl5.30 libpython3.8 libpython3.8-minimal libpython3.8-stdlib
  <br/>    libsmartcols1 libssh-4 libsystemd0 libudev1 libuuid1 libx11-6 libx11-data libx11-dev libx11-xcb1 mount perl
  <br/>    perl-base perl-modules-5.30 python3-requests python3.8 python3.8-minimal systemd systemd-sysv systemd-timesyncd udev
  <br/>    util-linux uuid-runtime vim vim-common vim-runtime vim-tiny xxd
  <br/>  54 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
  <br/>  32 standard LTS security updates
  <br/>  Need to get 37.7 MB of archives.
  <br/>  After this operation, 9216 B of additional disk space will be used.
  <br/>  Do you want to continue? [Y/n] y
  <br/>  Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 bsdutils amd64 1:2.34-0.1ubuntu9.4 [63.0 kB]
  <br/>  Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libperl5.30 amd64 5.30.0-9ubuntu0.4 [3959 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl amd64 5.30.0-9ubuntu0.4 [224 kB]
  <br/>  Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-base amd64 5.30.0-9ubuntu0.4 [1514 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-modules-5.30 all 5.30.0-9ubuntu0.4 [2739 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libblkid1 amd64 2.34-0.1ubuntu9.4 [137 kB]
  <br/>  Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libuuid1 amd64 2.34-0.1ubuntu9.4 [20.0 kB]
  <br/>  Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libfdisk1 amd64 2.34-0.1ubuntu9.4 [174 kB]
  <br/>  Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libmount1 amd64 2.34-0.1ubuntu9.4 [150 kB]
  <br/>  Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsmartcols1 amd64 2.34-0.1ubuntu9.4 [100 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 fdisk amd64 2.34-0.1ubuntu9.4 [119 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 util-linux amd64 2.34-0.1ubuntu9.4 [1021 kB]
  <br/>  Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libnss-systemd amd64 245.4-4ubuntu3.22 [95.8 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 udev amd64 245.4-4ubuntu3.22 [1366 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libudev1 amd64 245.4-4ubuntu3.22 [75.4 kB]
  <br/>  Get:16 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-sysv amd64 245.4-4ubuntu3.22 [10.3 kB]
  <br/>  Get:17 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-timesyncd amd64 245.4-4ubuntu3.22 [28.1 kB]
  <br/>  Get:18 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-systemd amd64 245.4-4ubuntu3.22 [186 kB]
  <br/>  Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcap2 amd64 1:2.32-1ubuntu0.1 [15.8 kB]
  <br/>  Get:20 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 mount amd64 2.34-0.1ubuntu9.4 [115 kB]
  <br/>  Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd amd64 245.4-4ubuntu3.22 [3811 kB]
  <br/>  Get:22 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsystemd0 amd64 245.4-4ubuntu3.22 [267 kB]
  <br/>  Get:23 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8 amd64 3.8.10-0ubuntu1~20.04.8 [1625 kB]
  <br/>  Get:24 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8 amd64 3.8.10-0ubuntu1~20.04.8 [387 kB]
  <br/>  Get:25 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-stdlib amd64 3.8.10-0ubuntu1~20.04.8 [1675 kB]
  <br/>  Get:26 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [1902 kB]
  <br/>  Get:27 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [717 kB]
  <br/>  Get:28 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 uuid-runtime amd64 2.34-0.1ubuntu9.4 [35.4 kB]
  <br/>  Get:29 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-cap amd64 1:2.32-1ubuntu0.1 [8364 B]
  <br/>  Setting up vim-runtime (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up libpython3.8-stdlib:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up python3.8 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-host (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up libfwupdplugin5:amd64 (1.7.9-1~20.04.3) ...
  <br/>  Setting up libpam-cap:amd64 (1:2.32-1ubuntu0.1) ...
  <br/>  Setting up fwupd (1.7.9-1~20.04.3) ...
  <br/>  Setting up libx11-dev:amd64 (2:1.6.9-2ubuntu1.5) ...
  <br/>  Setting up libglib2.0-bin (2.64.6-1~ubuntu20.04.6) ...
  <br/>  Setting up vim-tiny (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up fdisk (2.34-0.1ubuntu9.4) ...
  <br/>  Setting up perl (5.30.0-9ubuntu0.4) ...
  <br/>  Setting up libpython3.8:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-dnsutils (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up vim (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up systemd-timesyncd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd-sysv (245.4-4ubuntu3.22) ...
  <br/>  Setting up libnss-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Setting up libpam-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Processing triggers for mime-support (3.64ubuntu1) ...
  <br/>  Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
  <br/>  /sbin/ldconfig.real: /usr/lib/wsl/lib/libcuda.so.1 is not a symbolic link
<br/>
  <br/>  Processing triggers for man-db (2.9.1-1) ...
  <br/>  Processing triggers for dbus (1.12.16-2ubuntu2.3) ...
  <br/>  Processing triggers for initramfs-tools (0.136ubuntu6.7) ...
  <br/>  Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease
  <br/>  Get:2 http://security.ubuntu.com/ubuntu focal-security InRelease [114 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]
  <br/>  Get:4 http://security.ubuntu.com/ubuntu focal-security/main amd64 Packages [2267 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-backports InRelease [108 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 Packages [2649 kB]
  <br/>  Get:7 http://security.ubuntu.com/ubuntu focal-security/main Translation-en [362 kB]
  <br/>  Get:8 http://security.ubuntu.com/ubuntu focal-security/main amd64 c-n-f Metadata [13.0 kB]
  <br/>  Get:9 http://security.ubuntu.com/ubuntu focal-security/restricted amd64 Packages [1885 kB]
  <br/>  Get:10 http://security.ubuntu.com/ubuntu focal-security/restricted Translation-en [264 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 c-n-f Metadata [16.9 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages [1074 kB]
  <br/>  Get:13 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages [849 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/universe Translation-en [256 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/universe amd64 c-n-f Metadata [25.1 kB]
  <br/>  Get:16 http://security.ubuntu.com/ubuntu focal-security/universe Translation-en [176 kB]
  <br/>  Get:17 http://security.ubuntu.com/ubuntu focal-security/universe amd64 c-n-f Metadata [18.6 kB]
  <br/>  Fetched 10.2 MB in 2s (4130 kB/s)
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  54 packages can be upgraded. Run 'apt list --upgradable' to see them.
  <br/>  Reading package lists... Done
  <br/>  Building dependency tree
  <br/>  Reading state information... Done
  <br/>  Calculating upgrade... Done
  <br/>  The following packages will be upgraded:
  <br/>    bind9-dnsutils bind9-host bind9-libs bsdutils fdisk fwupd fwupd-signed libblkid1 libc-ares2 libcap2 libcap2-bin
  <br/>    libcups2 libfdisk1 libfwupd2 libfwupdplugin5 libglib2.0-0 libglib2.0-bin libglib2.0-data libmount1 libnghttp2-14
  <br/>    libnss-systemd libpam-cap libpam-systemd libperl5.30 libpython3.8 libpython3.8-minimal libpython3.8-stdlib
  <br/>    libsmartcols1 libssh-4 libsystemd0 libudev1 libuuid1 libx11-6 libx11-data libx11-dev libx11-xcb1 mount perl
  <br/>    perl-base perl-modules-5.30 python3-requests python3.8 python3.8-minimal systemd systemd-sysv systemd-timesyncd udev
  <br/>    util-linux uuid-runtime vim vim-common vim-runtime vim-tiny xxd
  <br/>  54 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
  <br/>  32 standard LTS security updates
  <br/>  Need to get 37.7 MB of archives.
  <br/>  After this operation, 9216 B of additional disk space will be used.
  <br/>  Do you want to continue? [Y/n] y
  <br/>  Get:1 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 bsdutils amd64 1:2.34-0.1ubuntu9.4 [63.0 kB]
  <br/>  Get:2 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libperl5.30 amd64 5.30.0-9ubuntu0.4 [3959 kB]
  <br/>  Get:3 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl amd64 5.30.0-9ubuntu0.4 [224 kB]
  <br/>  Get:4 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-base amd64 5.30.0-9ubuntu0.4 [1514 kB]
  <br/>  Get:5 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 perl-modules-5.30 all 5.30.0-9ubuntu0.4 [2739 kB]
  <br/>  Get:6 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libblkid1 amd64 2.34-0.1ubuntu9.4 [137 kB]
  <br/>  Get:7 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libuuid1 amd64 2.34-0.1ubuntu9.4 [20.0 kB]
  <br/>  Get:8 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libfdisk1 amd64 2.34-0.1ubuntu9.4 [174 kB]
  <br/>  Get:9 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libmount1 amd64 2.34-0.1ubuntu9.4 [150 kB]
  <br/>  Get:10 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsmartcols1 amd64 2.34-0.1ubuntu9.4 [100 kB]
  <br/>  Get:11 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 fdisk amd64 2.34-0.1ubuntu9.4 [119 kB]
  <br/>  Get:12 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 util-linux amd64 2.34-0.1ubuntu9.4 [1021 kB]
  <br/>  Get:13 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libnss-systemd amd64 245.4-4ubuntu3.22 [95.8 kB]
  <br/>  Get:14 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 udev amd64 245.4-4ubuntu3.22 [1366 kB]
  <br/>  Get:15 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libudev1 amd64 245.4-4ubuntu3.22 [75.4 kB]
  <br/>  Get:16 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-sysv amd64 245.4-4ubuntu3.22 [10.3 kB]
  <br/>  Get:17 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd-timesyncd amd64 245.4-4ubuntu3.22 [28.1 kB]
  <br/>  Get:18 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-systemd amd64 245.4-4ubuntu3.22 [186 kB]
  <br/>  Get:19 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libcap2 amd64 1:2.32-1ubuntu0.1 [15.8 kB]
  <br/>  Get:20 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 mount amd64 2.34-0.1ubuntu9.4 [115 kB]
  <br/>  Get:21 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 systemd amd64 245.4-4ubuntu3.22 [3811 kB]
  <br/>  Get:22 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libsystemd0 amd64 245.4-4ubuntu3.22 [267 kB]
  <br/>  Get:23 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8 amd64 3.8.10-0ubuntu1~20.04.8 [1625 kB]
  <br/>  Get:24 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8 amd64 3.8.10-0ubuntu1~20.04.8 [387 kB]
  <br/>  Get:25 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-stdlib amd64 3.8.10-0ubuntu1~20.04.8 [1675 kB]
  <br/>  Get:26 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 python3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [1902 kB]
  <br/>  Get:27 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpython3.8-minimal amd64 3.8.10-0ubuntu1~20.04.8 [717 kB]
  <br/>  Get:28 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 uuid-runtime amd64 2.34-0.1ubuntu9.4 [35.4 kB]
  <br/>  Get:29 http://archive.ubuntu.com/ubuntu focal-updates/main amd64 libpam-cap amd64 1:2.32-1ubuntu0.1 [8364 B]
  <br/>  Setting up vim-runtime (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up libpython3.8-stdlib:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up python3.8 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-host (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up libfwupdplugin5:amd64 (1.7.9-1~20.04.3) ...
  <br/>  Setting up libpam-cap:amd64 (1:2.32-1ubuntu0.1) ...
  <br/>  Setting up fwupd (1.7.9-1~20.04.3) ...
  <br/>  Setting up libx11-dev:amd64 (2:1.6.9-2ubuntu1.5) ...
  <br/>  Setting up libglib2.0-bin (2.64.6-1~ubuntu20.04.6) ...
  <br/>  Setting up vim-tiny (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up fdisk (2.34-0.1ubuntu9.4) ...
  <br/>  Setting up perl (5.30.0-9ubuntu0.4) ...
  <br/>  Setting up libpython3.8:amd64 (3.8.10-0ubuntu1~20.04.8) ...
  <br/>  Setting up bind9-dnsutils (1:9.16.1-0ubuntu2.15) ...
  <br/>  Setting up vim (2:8.1.2269-1ubuntu5.15) ...
  <br/>  Setting up systemd-timesyncd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd (245.4-4ubuntu3.22) ...
  <br/>  Setting up systemd-sysv (245.4-4ubuntu3.22) ...
  <br/>  Setting up libnss-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Setting up libpam-systemd:amd64 (245.4-4ubuntu3.22) ...
  <br/>  Processing triggers for mime-support (3.64ubuntu1) ...
  <br/>  Processing triggers for libc-bin (2.31-0ubuntu9.9) ...
  <br/>  /sbin/ldconfig.real: /usr/lib/wsl/lib/libcuda.so.1 is not a symbolic link
<br/>
  <br/>  Processing triggers for man-db (2.9.1-1) ...
  <br/>  Processing triggers for dbus (1.12.16-2ubuntu2.3) ...
  <br/>  Processing triggers for initramfs-tools (0.136ubuntu6.7) ...
  </p>

  useEffect(() => {
    setTimeout(() => { setIsLoading(false) }, 900)
  }, [])

  return (
    <main className="cli">
      <div className='cli-inner scrollable bg-glow'>
        {isLoading ? loading : null}
        {output.map((item, i) => <p key={i}>{item}</p>)}
        <div className='cli-in'>
          <span className="terminal-line">root@user-kali:</span>
          ~$
          <input className='terminal-in'
            type="text"
            ref={inputRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeys}
            autoFocus
          />
        </div>
      </div>
    </main>
  )
}

export default CliPage
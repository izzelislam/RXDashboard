
type Menu = {
  label: string;
  icon?: string;
  path?: string;
  children?: Menu[];
}

const menus: Menu[] = [
  {
    label: 'Dashboard',
    icon: 'solar:home-2-bold-duotone',
    path: '/'
  },
  // {
  //   label: 'Checkin/Out',
  //   icon: 'solar:inbox-archive-bold-duotone',
  //   path: '/'
  // },
  {
    label: 'Components',
    icon: 'solar:documents-minimalistic-bold-duotone',
    children: [
      {
        label: 'Card',
        path: '/kamar'
      },
      {
        label: 'Form',
        path: '/kamar-add'
      },
      {
        label: 'Tabel',
        path: '/kamar-add'
      },
    ]
  },
  {
    label: 'UI',
    icon: 'solar:box-bold-duotone',
    children: [
      {
        label: 'Button',
        path: '/button'
      },
      {
        label: 'Card',
        path: '/card'
      },
      {
        label: 'Form',
        path: '/kamar-add'
      },
      {
        label: 'Tabel',
        path: '/kamar-add'
      },
      {
        label: 'Toast',
        path: '/toast'
      },
    ]
  },
  // {
  //   label: 'Transaksi',
  //   icon: 'solar:cart-3-bold-duotone',
  //   children: [
  //     {
  //       label: 'Transaksi',
  //       path: '/transaksi'
  //     },
  //     {
  //       label: 'Laporan',
  //       path: '/transaksi-add'
  //     }
  //   ]
  // },
  // {
  //   label: 'Penguna',
  //   icon: 'solar:users-group-rounded-bold-duotone',
  //   children: [
  //     {
  //       label: 'Admin',
  //       path: '/transaksi'
  //     },
  //     {
  //       label: 'Afiliator',
  //       path: '/transaksi-add'
  //     },
  //     {
  //       label: 'Pelanggan',
  //       path: '/transaksi-add'
  //     }
  //   ]
  // },
  // {
  //   label: 'Post',
  //   icon: 'solar:signpost-2-bold-duotone',
  //   children: [
  //     {
  //       label: 'Berita',
  //       path: '/transaksi'
  //     },
  //     {
  //       label: 'Kategory',
  //       path: '/transaksi-add'
  //     }
  //   ]
  // },
  // {
  //   label: 'Pengaturan',
  //   icon: 'solar:settings-bold-duotone',
  //   children: [
  //     {
  //       label: 'Kontak',
  //       path: '/transaksi'
  //     },
  //     {
  //       label: 'Sosial',
  //       path: '/transaksi-add'
  //     }
  //   ]
  // },
  {
    label: 'Pages',
    icon: 'solar:file-bold-duotone',
    children: [
      {
        label: 'Login One',
        path: '/login-one'
      },
      {
        label: 'Login Two',
        path: '/login-two'
      },
      {
        label: 'Starter Page',
        path: '/starter-page'
      },
      {
        label: 'Form Layout',
        path: '/login-two'
      },
      {
        label: '404 Status',
        path: '/login-two'
      },
      {
        label: '500 Status',
        path: '/login-two'
      }
    ]
  }
];

export default menus;

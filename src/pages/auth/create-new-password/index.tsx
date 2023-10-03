import React from 'react'

import { TagProcessor } from '@/app/helpers/tag-processor'
import { useTranslation } from '@/app/hooks/useTranslation'
<<<<<<<< HEAD:src/pages/create-new-password/index.tsx
import { NewPasswordForm } from '@/components/create-new-password/create-new-password'
import { Typography } from '@/ui/typography/typography'
========
import { Typography } from '@/ui'
>>>>>>>> develop:src/pages/auth/create-new-password/index.tsx
<<<<<<< HEAD:src/pages/create-new-password/index.tsx
import { NewPasswordForm } from '@/components/create-new-password/create-new-password'
import { Typography } from '@/ui/typography/typography'
=======
import { Typography } from '@/ui'
>>>>>>> origin/develop:src/pages/auth/create-new-password/index.tsx

const CreateNewPassword = () => {
  const { t } = useTranslation()

  return (
    <NewPasswordForm />
    // <div>
    //   {t.navigation.menu.createNewPassword}
    //   <div>
    //     <Typography variant="large">
    //       {t.characterPage.getDescription('This name with no translation', 'same as species')}
    //     </Typography>
    //     <Typography variant="h1">
    //       <TagProcessor
    //         as={'div'}
    //         text={t.characterPage.description}
    //         tags={{
    //           1: () => <b>{'Rick'}</b>,
    //           2: () => <strong>{'species'}</strong>,
    //         }}
    //       />
    //     </Typography>
    //   </div>
    // </div>
  )
}

export default CreateNewPassword

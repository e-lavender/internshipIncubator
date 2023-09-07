import React from 'react'

import { TagProcessor } from '@/app/components/helpers/tag-processor'
import { useTranslation } from '@/app/hooks/useTranstaion'

const CreateNewPassword = () => {
  const { t } = useTranslation()

  return (
    <div>
      {t.navigation.menu.createNewPassword}
      <div>
        {t.characterPage.getDescription('This name with no translation', 'same as species')}
        <TagProcessor
          as={'p'}
          text={t.characterPage.description}
          tags={{
            1: () => <b>{'Rick'}</b>,
            2: () => <strong>{'species'}</strong>,
          }}
        />
      </div>
    </div>
  )
}

export default CreateNewPassword

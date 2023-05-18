import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

export default {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'alignment:left',
        'alignment:center',
        'alignment:right',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'undo',
        'redo'
      ]
    },
    plugins: [
      Alignment
    ],
    alignment: {
      options: ['left', 'center', 'right']
    }
  };